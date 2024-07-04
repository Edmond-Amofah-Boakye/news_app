import { FileUpload } from "@/services/s3/s3upload";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const formData =  await req.formData()
        const file = formData.get("file") as File | null
        const name = formData.get("name")

        if(!file){
            return NextResponse.json({message: "file is required"})
        }
        const buffer = Buffer.from(await file?.arrayBuffer())
        const dataUploaded = await new FileUpload().uploadFile(buffer, file.name)

        return NextResponse.json({message: name})
    } catch (error) {
        console.log(error);
    }
}