import type {LightPipelineModel} from "../model/LightPipelineModel";
import axios from "axios";

export async function getPipelines(): Promise<LightPipelineModel[]> {
    return axios.get(`${import.meta.env.VITE_CICD_BACK}/v1/pipelines`)
        .then(res => res.data);
}