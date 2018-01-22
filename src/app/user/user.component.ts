import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  private errorMessage: string;
  private isShowSignup = false;

  constructor(private router: Router, private userProfile: UserProfileService) {
  }

  ngOnInit() {
    this.isShowSignup = false;
  }

  public showSignup(): void {
    this.isShowSignup = true;
  }

  public userSignup() {
    if (this.hasFilled()) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Please, fill all the fields.';
    }
  }

  public userLogin(login: string, password: string) {
    if (this.hasValidCredentials(login, password)) {
      this.errorMessage = '';
      this.userProfile.setInfo('');
      this.router.navigate(['/search']);
    } else {
      this.errorMessage = 'You have entered invalid username or password.';
    }
  }

  public hasValidCredentials(login: string, password: string): boolean {
    if (login.length > 0 && password.length > 0) {
      return true;
    }
    return false;
  }

  public hasFilled(): boolean {
    return false;
  }

}
