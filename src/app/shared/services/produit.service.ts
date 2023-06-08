import { Injectable } from '@angular/core';
import { Produit } from '../classes/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
produits:Produit[]=[];
  constructor() { }
  addProduit(produit:Produit) {
  this.produits.push(produit);
  }
getProduits():Produit[] {
return this.produits;
}
getOneProduit(indice:number):Produit
{
  return this.produits[indice];
}
deleteProduit(indice:number):void
{
  this.produits.splice(indice, 1);
}

}
