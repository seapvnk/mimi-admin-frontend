import { World } from "./world.interface";

export interface Timeline {
    id: number;
    parent_id?: number;
    created_at: string;
    updated_at: string;
    start_date: string;
    url: string;
    worlds?: World[]
}

export interface TimelineForm {
    parent_id?: number;
    start_date: string;
}