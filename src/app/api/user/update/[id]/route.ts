import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";
import { ParamsType } from "../../remove/[id]/route";

export const PUT = async (req: Request,{ params }: { params: ParamsType }) => {
  const userData = await req.json();

  try {
    await DBCONNECTION();
    const allowedFileds = ["username", "email", "profile_image"];

    const updatedInfo = allowedFileds.reduce((acc: any, value: any) => {
      if (userData[value] !== undefined) {
        acc[value] = userData[value];
      }
      return acc;
    }, {} as Record<string, any>);

    const emailExists = await userModel.findOne({email: userData.email})
     if (emailExists) return Response.json({message: "email already exists"})
    

    const updateUser = await userModel.findByIdAndUpdate(
      params.id,
      updatedInfo,
      { new: true, runValidators: true }
    );

    if(!updateUser) return Response.json({message: "could not update"})
    return Response.json({message: "success", data: updateUser})

  } catch (error) {
    console.log(error);
  }
};
