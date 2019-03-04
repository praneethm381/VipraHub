import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public emailid;
public password;
public InvalidUser = false;
  constructor(public router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }
  userlogin() {
    let user = localStorage.getItem(this.emailid);
    if (user != null) {
      user = JSON.parse(user);
      // @ts-ignore
      if (this.password === user.password) {
        this.loginService.firstName = user['firstname'];
        this.loginService.secondName = user['lastname'];
        this.loginService.email = this.emailid;
        this.router.navigate(['/user']);
      }
    }
    this.InvalidUser = true;
}
}
