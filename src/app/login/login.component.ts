import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { email: '', password: '' };
  InvalidUser = false;
  constructor(public router: Router, public  ngAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async userlogin() {
    try {
      console.log(this.user.email);
      const result = await this.ngAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      this.router.navigate(['home']);
    } catch (err) {
      this.InvalidUser = true;
    }
  }

}
