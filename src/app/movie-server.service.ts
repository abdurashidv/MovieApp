import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieServerService {

  constructor(private http: HttpClient) { }

  public getMovie(): void {
    this.http
        .get('http://www.omdbapi.com/?apikey=PlsBanMe&t=Game+of+thrones&plot=ful')
        .subscribe(
          (data) => {
            console.log(data);
          }
        );
  }

}
