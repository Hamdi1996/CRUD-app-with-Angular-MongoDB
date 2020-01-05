import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles:Array<Article>;

  constructor(private _articleService:ArticleService) { }

  ngOnInit() {
    this._articleService.getArticles()
    .subscribe(res=>this.articles=res);
  }

}
