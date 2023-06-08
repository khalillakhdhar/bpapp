import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsDetailsComponent } from './produits-details/produits-details.component';

const routes: Routes = [
  { path: '', redirectTo:'produits',pathMatch:'full'},
  { path: 'produits', component:ProduitsComponent},
  {path:'details/:id',component:ProduitsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
