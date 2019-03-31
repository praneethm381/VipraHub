import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService} from '../services/login.service';
import {computeStyle} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailID: String = '';
  password: String = '';
  InvalidUser: Boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }



  ngOnInit() {
  }
  userLogin() {
    const user = {
      emailID: this.emailID,
      password: this.password
    };
    this.loginService.getUsers(user).subscribe( (data) => {
      // @ts-ignore
      if (data.message === 'Success') {
        this.router.navigate(['./userdashboard']);
        return true;
        // @ts-ignore
        console.log(data.message);
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });
  }


}

