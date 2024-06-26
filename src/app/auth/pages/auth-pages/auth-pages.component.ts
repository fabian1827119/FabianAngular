import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-pages',
  templateUrl: './auth-pages.component.html',
  styleUrl: './auth-pages.component.css'
})
export class AuthPagesComponent {

  selectedButton: string='login';
  selectedbtn:boolean=true;

  selectButton(button: string) {
    this.selectedButton = button;
    if (button === 'login') {
      this.selectedbtn = true;
    } else {
      this.selectedbtn = false;
    }
  }
}
