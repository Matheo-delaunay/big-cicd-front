import type {JobModel} from "./JobModel";

export interface PipelineModel {
    id: String;
    ref: String;
    user: Number;
    repository: String;
    date: String;
    time: Number | null;
    jobs: JobModel[];
}