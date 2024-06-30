import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";
import Joi from "joi";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

const validateSignup = Joi.object({
  username: Joi.string().min(3).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
  is_active: Joi.boolean(),
});


export const POST = async (req: Request) => {
  const {email, password,  ...args } = await req.json();
  const { error } = validateSignup.validate({ email, password, ...args });

  if (error) {
    return Response.json({
      message: error.details[0].message.replace(/["]/g, ""),
    });
  }

  try {
    await DBCONNECTION()
    const emailExists = await userModel.findOne({email})

    if(emailExists){
        return NextResponse.json({message: "user already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await userModel.create({ email, password: hashedPassword, ...args });
    if (!newUser) {
      return Response.json({ message: "no user created" });
    }
    
    return NextResponse.json({ message: "success", data: newUser });
  } catch (error) {
    console.log(error);
  }
};
