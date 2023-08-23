import { Timeline, TimelineForm } from 'src/app/clients/interface/timeline.interface';
import { AdminApiService } from './../../clients/admin-api.service';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {

  constructor(
    private adminService: AdminApiService,
    private title: TitleService
    ) { }

  timelines: Timeline[] = [];
  formTimeline: TimelineForm = {
    start_date: (new Date()).toString(),
  };

  displayedColumns: string[] = ['id', 'start_date', 'created_at', 'parent_id', 'actions'];
  formOpen: boolean = false;

  ngOnInit(): void {
    this.title.setTitle('timelines')
    this.fetchTimelines();
  }

  createTimeline() {
    let { start_date, parent_id } = this.formTimeline;
    start_date = new Date(start_date).toISOString().split('T')[0];

    this.adminService.createTimeline({ start_date, parent_id }).subscribe(() => {
      this.fetchTimelines();
      this.formOpen = false;
    })
  }

  fetchTimelines() {
    this.adminService.timelines().subscribe((timelines: Timeline[]) => {
      this.timelines = timelines
    })
  }
}
