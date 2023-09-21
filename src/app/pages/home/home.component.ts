import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './home.responsive.component.css'
  ]
})
export class HomeComponent implements OnInit {
  newsData: any[] = []
  constructor() {
    this.newsData = dataFake;
  }

  ngOnInit(): void {

  }

}
