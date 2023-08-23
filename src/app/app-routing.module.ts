import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { TimelineComponent } from './views/timeline/timeline.component';
import { ShowTimelineComponent } from './views/show-timeline/show-timeline.component';

const routes: Routes = [
  { path: 'timelines/:id', component: ShowTimelineComponent },
  { path: 'timelines', component: TimelineComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
