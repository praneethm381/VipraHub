import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedinUserInfoService {

  public userInfo = {
    'emailID': '',
    'fullName': ''
  };
  constructor() { }
  setUsers(data) {
     this.userInfo.emailID = data.user.emailID;
     this.userInfo.fullName = data.user.fullName;
     console.log('Inside SetUsers');
     console.log(this.userInfo);
  }
  getUsers() {
   return this.userInfo;
  }
}
