import axios from "axios";
import type {LightPipelineModel} from "../models/LightPipelineModel";
import type {PipelineModel} from "../models/PipelineModel";
import router from "../router";

export async function getPipelines(): Promise<LightPipelineModel[]> {
    return axios.get(`${import.meta.env.VITE_CICD_BACK}/v1/pipelines`)
        .then(res => res.data);
}

export async function getPipeline(id: string): Promise<PipelineModel> {
    return axios.get(`${import.meta.env.VITE_CICD_BACK}/v1/pipelines/${id}`)
        .then(res => res.data)
        .catch(error =>{
                router.push
        });
}

export async function startDeployment(repository: String, tag: String, userId: Number): Promise<string> {
    return axios.post(`${import.meta.env.VITE_CICD_BACK}/v1/pipelines/repository/${repository}/tag/${tag}`, null, {
        headers: {
            "X-User-Id": userId.toString()
        }
    }).then(res => res.data);
}