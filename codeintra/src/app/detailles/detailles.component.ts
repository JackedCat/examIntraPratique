import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../models/articles';

@Component({
  selector: 'app-detailles',
  templateUrl: './detailles.component.html',
  styleUrls: ['./detailles.component.css']
})
export class DetaillesComponent implements OnInit {

  @Input() produit!: IArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
