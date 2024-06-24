import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-users-page',
  templateUrl: './home-users-page.component.html',
  styleUrl: './home-users-page.component.css'
})
export class HomeUsersPageComponent {
  @Input()
  showComponent: boolean;
  @Input()
  showComponentUserlist: boolean;

  constructor() {
    this.showComponent = false; // Assign a default value to 'showComponent'
    this.showComponentUserlist = false; // Assign a default value to 'showComponentUserlist'
  }
}
