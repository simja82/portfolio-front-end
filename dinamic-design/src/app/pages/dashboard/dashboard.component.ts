import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Admin Dashboard | Point of View')
  }

  ngOnInit(): void { }

}
