import { Component, OnInit } from '@angular/core';
// import {LoginComponent} from '../login/login.component';
import {ViprahubService} from '../viprahub.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  public loginout = 'Log In';
  public hideSignup = false;
  search = { text: ''};

  constructor(public router: Router, public vipraService: ViprahubService) { }
  logInOut() {
    if (this.loginout === 'Log Out') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  getResults() {
      this.vipraService.searchMetadataByText(this.search.text).subscribe(res => {
        console.log(res);
        this.vipraService.searchResults = res;
        this.router.navigate(['/search']);
      }, err => {
        console.log(err);
      });

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
