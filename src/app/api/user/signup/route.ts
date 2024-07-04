import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";
import Joi from "joi";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { FileUpload } from "@/services/s3/s3upload";

const validateSignup = Joi.object({
  username: Joi.string().min(3).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
  is_active: Joi.boolean(),
  profile_image: Joi.string(),
  role: Joi.string(),
});

export const POST = async (req: Request) => {
  const formData = await req.formData();

  const username = formData.get("username");
  const email = formData.get("email");
  const role = formData.get("role");
  const password = formData.get("password") as string;
  const is_active = Boolean(formData.get("is_active"));
  const profile_image = formData.get("profile_image") as File | null;

  const userData = { email, password, username, is_active, role };
  const { error } = validateSignup.validate(userData);

  if (error) {
    return Response.json({
      message: error.details[0].message.replace(/["]/g, ""),
    });
  }

  try {
    await DBCONNECTION();
    const emailExists = await userModel.findOne({ email });

    if (emailExists) {
      return NextResponse.json({ message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    let profileImage: string = "";

    if (profile_image) {
      const buffer = Buffer.from(await profile_image.arrayBuffer());
      profileImage = await new FileUpload().uploadFile(
        buffer,
        profile_image.name
      );
    }

    const newUser = await userModel.create({
      ...userData,
      password: hashedPassword,
      profile_image: profileImage ?? "",
    });
    if (!newUser) {
      return Response.json({ message: "no user created" });
    }

    return NextResponse.json({ message: "success", data: newUser });
  } catch (error) {
    console.log(error);
  }
};
