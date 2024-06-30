import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";

export interface ParamsType {
    id: string;
}

export const  DELETE = async(req: Request, { params }: {params : ParamsType}) => {
    try {
        await DBCONNECTION()
        const userExists = await userModel.findById(params.id)
        if(!userExists) return Response.json(({message: "no user found"}))

        await userModel.findByIdAndDelete(params.id)
        return Response.json({message: "user deleted sucessfully"})
        
    } catch (error) {
        console.log(error);
    }
}