import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticle } from '../models/articles';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  @Input() produits!: IArticle[];
  selection!: string | null;
  @Output() produitChoisit = new EventEmitter<IArticle>();
  @Output() ajoute_event= new EventEmitter<IArticle>();
  @Output() retire_event= new EventEmitter<IArticle>();

  constructor() { }

  ngOnInit(): void {
  }

  choisitUnProduit(produit: string): void {
    this.selection = produit;
    const sel_prod = this.produits.find(prod => prod.sku == produit);
    if (sel_prod) {
      this.produitChoisit.emit(sel_prod);
    }
  }

  retireProduit(art: IArticle, event: Event): void {
    event.stopPropagation();
    this.ajoute_event.emit(art);
  }

  ajouteProduit(art: IArticle, event: Event): void {
    event.stopPropagation();
    this.retire_event.emit(art);
  }

}
