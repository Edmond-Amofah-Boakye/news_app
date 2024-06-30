import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";
import Joi from "joi";
import bcrypt from "bcryptjs";

const validateResetDetails = Joi.object({
    password: Joi.string().trim().min(7).required(),
    confirm_password: Joi.string().trim().min(7).required()
})

export const POST = async(req: Request, {params}: {params: {token: string}}) => {
    try {
        await DBCONNECTION()
        const { password, confirm_password } = await req.json()
        const { error } = validateResetDetails.validate({ password, confirm_password })

        if (error) {
            return Response.json({message: error.details[0].message.replace(/["]/g, "")});
          }

        if(password !== confirm_password) return Response.json({message: "pasword do not match"})

        const userExists = await userModel.findOne({token: params.token})
        if(!userExists) return Response.json({message: "no user exists"})

        const hashedPassword = await bcrypt.hash(password, 12)
        userExists.password = hashedPassword
        await userExists.save()

        return Response.json({message: "password reset successful"})

    } catch (error) {
        console.log(error);
    }
}