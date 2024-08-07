import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/data/data.service';

@Component({
  selector: 'home-users-page',
  templateUrl: './home-users-page.component.html',
  styleUrl: './home-users-page.component.css'
})
export class HomeUsersPageComponent {
  @Input()
  showComponent: boolean=false;
  @Input()
  showComponentUserlist: boolean=false;

  constructor(private dataService:DataService) {
    //this.showComponent = true; // Assign a default value to 'showComponent'
    this.dataService.currentSuccess.subscribe(success=>this.showComponent=success);
    this.showComponentUserlist = true; // Assign a default value to 'showComponentUserlist'
  }
}
