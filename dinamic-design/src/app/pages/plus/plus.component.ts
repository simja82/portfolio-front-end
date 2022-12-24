import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Plus | Point of View')
  }

  ngOnInit(): void { }

}
