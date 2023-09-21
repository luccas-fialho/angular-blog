import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  cardPhoto: string = '';
  cardTitle: string = '';
  cardDesc: string = '';
  id: string = '0';

  constructor() {
    this.cardPhoto = dataFake[0].photo;
    this.cardTitle = dataFake[0].title;
    this.cardDesc = dataFake[0].description;
    this.id = dataFake[0].id;
  }

  ngOnInit(): void {}
}
