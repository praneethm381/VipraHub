import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = {
     'firstname': '',
     'lastname': '',
     'email': '',
     'password': '',
     'cpassword': ''
    };

  constructor(public ngAuth: AngularFireAuth, private router: Router) {
    // this.resetuser();
  }
  // resetuser() {
  //   this.user = {
  //     'firstname': '',
  //     'lastname': '',
  //     'username': '',
  //     'password': '',
  //     'cpassword': ''
  //   };
  // }
  ngOnInit() {
  }
  registerUser() {

    if (this.user.password !== this.user.cpassword) {
      return console.error('Password don\'t match');
    }
    try {
      const result = this.ngAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
      this.router.navigate(['login']);
    } catch (err) {
      console.dir(err);
    }
  }

  }

