import { Component, OnInit } from '@angular/core';

interface NavLink {
  link: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  links: NavLink[];

  constructor() {
    this.links = [
      {
        link: '/',
        description: 'Home',
        icon: 'home'
      },
      {
        link: 'timelines',
        description: 'Timelines',
        icon: 'view_timeline'
      },
    ]
  }

  ngOnInit(): void {
  }

}
