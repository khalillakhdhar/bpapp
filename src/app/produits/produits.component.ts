import { Component } from '@angular/core';
import { Produit } from '../shared/classes/produit';
import { ProduitService } from '../shared/services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
produit=new Produit();
produits: Produit[] = [];
constructor(private router:Router, private produitService:ProduitService)
{
this.getProduits();
}
getProduits(): void
{
  this.produits=this.produitService.getProduits();
}
addProduit()
{
this.produitService.addProduit(this.produit);
this.produit=new Produit();

}



}
