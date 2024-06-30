import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";

export const GET = async (req: Request,{ params }: { params: { token: string } }) => {
  try {
    await DBCONNECTION();
    const userTokenExists = await userModel.findOne({ token: params.token });

    if (!userTokenExists) {
      return Response.json({ message: "user with token do not exist" });
    }

    if (
      userTokenExists.tokenExpiration !== undefined &&
      Date.now() >= userTokenExists.tokenExpiration
    ) {
      return Response.json({ message: "token expired" });
    }

    return Response.json({ message: "proceed to reset password" });
  } catch (error) {
    console.log(error);
  }
};
