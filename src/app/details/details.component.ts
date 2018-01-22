import { Component, OnInit } from '@angular/core';
import { IMovie, IRating } from '../index.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  private movie: any;

  private errorMessage: string;
  private isMovieHidden: boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        if (params.name) {
          this.http
              .get('http://www.omdbapi.com/?apikey=PlsBanMe&t=' + params.name + '&plot=full')
              .subscribe(
                (data) => {
                    this.movie = data;
                  }
              );
        }
      });
    }

  setMovieName(value) {
    if (value) {
      this.isMovieHidden = false;
      this.http
      .get('http://www.omdbapi.com/?apikey=PlsBanMe&t=' + value + '&plot=full')
      .subscribe(
        (data) => {
          this.movie = data;
        }
      );
    } else {
      this.isMovieHidden = true;
      this.errorMessage = 'Please, enter movie name in search box.';
    }
  }
}
