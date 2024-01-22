import type {JobModel} from "./JobModel";

export interface PipelineModel {
    id: String;
    ref: String;
    user: String;
    repository: String;
    pushDate: String;
    jobs: JobModel[];
}