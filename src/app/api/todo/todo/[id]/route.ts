import { DBCONNECTION } from "@/DB/connection"
import todoSchema from "@/model/todo"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }){

    await DBCONNECTION()
    try {
        const id = params.id
        const todo = await todoSchema.findById(id);
        if(!todo){
            return NextResponse.json({success: false, message: "no todo exists"})
        }

        return NextResponse.json({success: true, data: todo})
       
    } catch (error) {
        console.log(error);
    }
}