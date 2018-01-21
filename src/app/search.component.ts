import { Component, OnInit } from '@angular/core';
import { MovieServerService } from './movie-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  routeToDetails(value) {
    this.router.navigate(['/details/' + value]);
  }
}
