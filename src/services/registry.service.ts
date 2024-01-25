import axios from "axios";

export async function getTags(repository: String): Promise<string[]> {
    return axios.get(`${import.meta.env.VITE_CICD_BACK}/v1/registries/${repository}`)
        .then(res => res.data);
}