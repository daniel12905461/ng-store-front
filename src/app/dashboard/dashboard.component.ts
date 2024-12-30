import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: false
})
export class DashboardComponent {
  menuShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  menu(){
    this.menuShow ? this.menuShow = false : this.menuShow = true;
  }
}
