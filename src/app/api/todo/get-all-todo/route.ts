import { DBCONNECTION } from "@/DB/connection";
import todoSchema from "@/model/todo";
import { NextResponse } from "next/server";

export async function GET (req: Request){
    await DBCONNECTION()
    try {
        const todos = await todoSchema.find({})

        if(!todos){
            return NextResponse.json({success: false, message: "no todos exists"})
        }
        return NextResponse.json({success: true, data: todos})

    } catch (error) {
        return NextResponse.json({sucess: false, message: "something went wrong"}) 
    }
}