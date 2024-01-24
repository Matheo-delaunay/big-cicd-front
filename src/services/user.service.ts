import axios from "axios";
import type {UserRes} from "../services/models/UserRes";

export async function getUser(code: String): Promise<UserRes> {
    return axios.post(`${import.meta.env.VITE_CICD_BACK}/v1/users`, code)
        .then(res => res.data)
}