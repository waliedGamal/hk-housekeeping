import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  constructor(private router: Router){
  }
  contactClick() {
    this.router.navigate(['/contact']);
  }
}
