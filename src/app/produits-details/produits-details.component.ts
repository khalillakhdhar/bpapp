import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from './../shared/classes/produit';
import { ProduitService } from './../shared/services/produit.service';

@Component({
  selector: 'app-produits-details',
  templateUrl: './produits-details.component.html',
  styleUrls: ['./produits-details.component.css']
})
export class ProduitsDetailsComponent {
  id:any;
  product=new Produit();
  constructor(private router:ActivatedRoute, private produitService: ProduitService)
  {

  }
  ngOnInit(){
    this.id=this.router.snapshot.paramMap.get("id");
    this.product=this.produitService.getOneProduit(parseInt(this.id));


  }

}
