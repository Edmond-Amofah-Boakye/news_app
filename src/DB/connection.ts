import mongoose from "mongoose";

export const DBCONNECTION = async() => {
    try {
        const connect = await mongoose.connect((process.env.DB_URL) as string)
        console.log(`database connect on ${connect.connection.host}`);
    } catch (error) {
        console.log(`error occured ${error}`);
    }
}