import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminApiUrl } from './environment';
import { Timeline, TimelineForm } from './interface/timeline.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http: HttpClient) {}

  timelines(): Observable<Timeline[]> {
    return this.http.get<Timeline[]>(`${adminApiUrl}/timelines.json`);
  }

  timeline(id: number): Observable<Timeline> {
    return this.http.get<Timeline>(`${adminApiUrl}/timelines/${id}.json`);
  }

  createTimeline(timeline: TimelineForm): Observable<Timeline> {
    return this.http.post<Timeline>(`${adminApiUrl}/timelines.json`, { timeline });
  }
}
