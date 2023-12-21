import { Component } from '@angular/core';
import { articlesGlobeaux, IArticle } from './models/articles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lesArticle: IArticle[] = articlesGlobeaux;
  selection: IArticle | null = null;
  articles_in_cart: IArticle[] = [];

  constructor() {
  }

  choixiProduit(choix: IArticle): void {
    this.selection = choix;
  }

  ajouteArticle(art: IArticle): void {
    this.articles_in_cart.push(art);
  }

  retireArticle(art: IArticle): void {
    this.articles_in_cart = this.articles_in_cart.filter(
      article => article.sku != art.sku
    );
  }
}
