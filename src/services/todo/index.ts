import axios from "axios"
import { url } from "../baseURL"

export const getAllTodos = async () => {
    try {
        const response = await axios.get(`${url}todo/get-all-todo`)
        return response.data
    } catch (error) {
        console.log(`error occured fetching data ${error}`);
    }
}