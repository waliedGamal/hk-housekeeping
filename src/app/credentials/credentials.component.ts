import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {
  constructor(private router: Router) {}

  contactClick() {
    this.router.navigate(['/contact']);
  }

  slidesStore = [
    {src:"../../assets/ref1.png",title:"Praxisreinigung"},
    {src:"../../assets/ref2.png",title:"Büroreinigung"},
    {src:"../../assets/ref3.png",title:"Hotelreinigung"}
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    // nav: true
  }

}
