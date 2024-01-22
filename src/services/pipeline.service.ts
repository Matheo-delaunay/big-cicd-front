import axios from "axios";
import type {LightPipelineModel} from "../models/LightPipelineModel";
import type {PipelineModel} from "../models/PipelineModel";

export async function getPipelines(): Promise<LightPipelineModel[]> {
    return axios.get(`${import.meta.env.VITE_CICD_BACK}/v1/pipelines`)
        .then(res => res.data);
}

export async function getPipeline(id: string): Promise<PipelineModel> {
    return axios.get(`${import.meta.env.VITE_CICD_BACK}/v1/pipelines/${id}`)
        .then(res => res.data);
}