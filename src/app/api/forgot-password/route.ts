import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";
import AppEmail from "@/services/mail/mail";
import crypto from "crypto";
import Email from "next-auth/providers/email";

const generateResetToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  return hashedToken;
};

export const POST = async (req: Request) => {
  try {
    await DBCONNECTION();
    const { email } = await req.json();
    const userExists = await userModel.findOne({ email });
    if (!userExists) return Response.json({ message: "no user found" });

    const token = generateResetToken();
    userExists.token = token;
    userExists.tokenExpiration = Date.now() + 30 * 60 * 1000;
    await userExists.save();

    const link = `You requested for password reset, click on the link below to reset your password. If you did not request for this please ignore. http://localhost:3000/${userExists.token}`;
    new AppEmail(email, link, "").sendResetEmail();

    return Response.json({ message: "password link sent, check your email" });
  } catch (error) {
    console.log(error);
  }
};
