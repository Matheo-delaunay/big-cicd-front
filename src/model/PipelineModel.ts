import type {JobModel} from "./jobModel";

export interface PipelineModel {
    id: String;
    ref: String;
    user: String;
    repository: String;
    pushDate: String;
    jobs: JobModel[];
}