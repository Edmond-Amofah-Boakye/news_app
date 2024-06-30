import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";

export const GET = async(req: Request) => {
    try {
        await DBCONNECTION()
        const users = await userModel.find({}).select("-password").exec() 

        return Response.json({message: "success", data: users})
    } catch (error) {
        console.log(error);
    }
}