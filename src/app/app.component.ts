import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bpapp';
  rappel={tache:'',date:''};
  rappels:any=[];
  ngOnInit(): void {

    this.rappels=JSON.parse(localStorage.getItem("rappels")||"");

  }



  addRappel()
  {
    this.rappels.push(this.rappel);
    // convertir en chaine et stocker dans localStorage
    localStorage.setItem("rappels",JSON.stringify(this.rappels));

    this.rappel={tache:'',date:''};


  }
  deleteRappel(index:number)
  {
    if(confirm('Are you sure you want to delete'))
    {
      this.rappels.splice(index, 1);
      localStorage.setItem("rappels",JSON.stringify(this.rappels));

    }


  }
}
