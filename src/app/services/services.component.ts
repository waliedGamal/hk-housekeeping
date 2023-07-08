import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private router : Router){}


  contactClick(){
    this.router.navigate(['/contact']);
  }

  services = ["Hotelreinigungen","Restaurantreinigungen" ,"Baureinigungen" , "Büroraumreinigungen","Praxisreinigungen","Treppenhausreinigungen","Schulreinigungen","Glasreinigungen","Unterhaltsreinigungen"]
}
