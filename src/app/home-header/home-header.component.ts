import { Component, OnInit } from '@angular/core';
// import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  public loginout = 'Log In';
  public hideSignup = false;
  constructor(public router: Router) { }
  userprofile() {
    // this.loginComponent.userlogin();
  }
  logInOut() {
    if (this.loginout === 'Log Out') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit() {
    if (this.router.url === '/user') {
      this.loginout = 'Log Out';
      this.hideSignup = true;
    } else {
      this.loginout = 'Log In';
      this.hideSignup = false ;
    }
  }

}
