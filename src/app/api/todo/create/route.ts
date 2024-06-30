import { DBCONNECTION } from "@/DB/connection";
import todoSchema from "@/model/todo";
import { NextResponse } from "next/server";
import Joi from "joi";


const validateCreateTodo = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(3).required(),
  status: Joi.boolean().required()
})

export async function POST(req: Request) {
  const { title, description, status } = await req.json();

  const { error } = validateCreateTodo.validate({title, description, status})

  if(error){
    return NextResponse.json({status: "failed", error: error.details[0].message.replace(/['"]+/g, '')})
  }

  try {
    await DBCONNECTION();
    const newTodo = await todoSchema.create({
      title,
      description,
      status,
    });

    if (!newTodo) {
      return NextResponse.json({
        sucess: false,
        message: "failed to create todo",
      });
    }

    return NextResponse.json({ sucess: true, data: newTodo });
  } catch (error) {
    console.log(error);
    return NextResponse.json({sucess: false, message: "something went wrong"})
  }
}
