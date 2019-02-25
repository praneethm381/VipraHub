import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = {
    'firstname': '',
    'lastname': '',
    'username': '',
    'password': ''
  };
  constructor() {
    this.resetuser();
  }
  resetuser() {
    this.user = {
      'firstname': '',
      'lastname': '',
      'username': '',
      'password': ''
    };
  }
  ngOnInit() {
  }
  registerUser() {
    let userInfo = {
      'firstname': this.user.firstname,
      'lastname': this.user.lastname,
      'username': this.user.username,
      'password': this.user.password
    }
    // localStorage supported
    if (window.localStorage) {
      localStorage.setItem(userInfo.username, JSON.stringify(userInfo));
      this.resetuser();
    }

  }

}
