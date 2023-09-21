import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  newsPhoto: string = '';
  newsTitle: string = '';
  newsDesc: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValueToComponents(this.id)
  }

  setValueToComponents(id:string | null) {
    const result = dataFake.filter( news => news.id == id)[0]

    this.newsPhoto = result.photo;
    this.newsTitle = result.title;
    this.newsDesc = result.description;
  }
}
