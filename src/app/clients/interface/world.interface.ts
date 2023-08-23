export interface World {
    id: number;
    timeline_id: number;
    created_at: string;
    updated_at: string;
    url: string;
    worlds: World
}