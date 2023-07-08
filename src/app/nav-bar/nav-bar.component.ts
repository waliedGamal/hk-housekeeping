import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private router: Router){
  }
  HomeClick() {
    this.router.navigate(['/welcome']);
  }

  //nav toggle is hide
  isToggle = false
  
  showClass(){
    //nav toggle is hide
      this.isToggle = true
    }

  hideClass(){
  //nav toggle is hide
    this.isToggle = false
  }


}
