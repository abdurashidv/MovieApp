import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() { }

  routeToDetails(value) {
    this.router.navigate(['/details/' + value]);
  }
}
