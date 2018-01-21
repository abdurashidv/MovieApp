import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private errorMessage: string;

  constructor() {
  }

  ngOnInit() { }

  userSignup() {
    if (this.hasFilled()) {
      //
    } else {
      this.errorMessage = 'Please, fill all the fields.';
    }
  }

  userLogin(login: string, password: string) {
    // log the user in
    if (this.hasValidCredentials(login, password)) {
      // user login url goes here
    } else {
      this.errorMessage = 'You have entered invalid username or password.';
    }
  }

  hasValidCredentials(login: string, password: string): boolean {
    if (login.length > 0 && password.length > 0) {
      return true;
    }
    return false;
  }

  hasFilled(): boolean {
    return false;
  }

}
