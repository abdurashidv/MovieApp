import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private userProfile: UserProfileService) {
    console.log(this.userProfile.isLogged());
   }

  sendLoginPage() {
    this.router.navigate(['/user']);
  }

}
