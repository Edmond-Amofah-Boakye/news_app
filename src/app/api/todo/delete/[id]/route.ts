import { DBCONNECTION } from "@/DB/connection";
import todoSchema from "@/model/todo";
import { NextResponse } from "next/server";

export async function DELETE (req: Request, {params}: {params: {id: string}}){
    await DBCONNECTION()
    try {
        const id = params.id
        const findTodo = await todoSchema.findById(id)

        if(!findTodo){
            return NextResponse.json({status: "failed", message: "no data exists"})
        }
        await todoSchema.findByIdAndDelete(id)
        return NextResponse.json({status: "todo successfully deleted"})
        
    } catch (error) {
        console.log(error);
    }
}