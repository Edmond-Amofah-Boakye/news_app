import userModel from "@/model/user"
import { ParamsType } from "../remove/[id]/route";

export const GET = async(req: Request, {params}: {params: ParamsType}) => {
    try {  
        const user = await userModel.findById(params.id)
        if(!user) return Response.json({message: "no user found"})
        return Response.json({message: "success", data: user})
        
    } catch (error) {
        console.log(error);
    }
}