import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminApiService } from 'src/app/clients/admin-api.service';
import { Timeline } from 'src/app/clients/interface/timeline.interface';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-show-timeline',
  templateUrl: './show-timeline.component.html',
  styleUrls: ['./show-timeline.component.sass']
})
export class ShowTimelineComponent implements OnInit {

  timeline: Timeline = {
    id: 0,
    created_at: '',
    start_date: '',
    updated_at: '',
    url: '',
    parent_id: 0
  };

  displayedColumns: string[] = ['id', 'name', 'description', 'signature', 'created_at', 'actions'];

  constructor(
    private adminService: AdminApiService,
    private route: ActivatedRoute,
    private title: TitleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.adminService.timeline(params['id']).subscribe(timeline => {
        this.timeline = timeline;
        this.title.setTitle(`timeline #${timeline.id.toString().padStart(5, '0')}`)
      })
    })
  }

}
