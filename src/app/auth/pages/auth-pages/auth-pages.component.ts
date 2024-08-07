import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/data/data.service';

@Component({
  selector: 'app-auth-pages',
  templateUrl: './auth-pages.component.html',
  styleUrl: './auth-pages.component.css'
})
export class AuthPagesComponent implements OnInit {

  selectedButton: string='login';
  selectedbtn:boolean=true;
  success:boolean = false;

  constructor(private dataServive:DataService) { }


  ngOnInit(): void {
    this.dataServive.currentSuccess.subscribe(success=>this.success=success);
  }



  selectButton(button: string) {
    this.selectedButton = button;
    if (button === 'login') {
      this.selectedbtn = true;
    } else {
      this.selectedbtn = false;
    }
  }
}
