import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  navbarTitle: string = '';

  constructor(
    private location: Location,
    private title: TitleService
  ) { }

  ngOnInit(): void {
    this.title.title().subscribe(title => {
      this.navbarTitle = title;
    });
  }

  backHistory() {
    this.location.back();
  }

}
