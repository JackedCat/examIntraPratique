import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticle } from '../models/articles';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  @Input() panier!: IArticle[];

  constructor() { }

  ngOnInit(): void {
  }

  coutTotal(): number {
    return this.panier.reduce( (t, p) => p.salePrice + t, 0 )
  }

}
