import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {

  private userName: string;
  private listings: any;
  private isUserLogged = false;

  constructor() { }

  public addMovie (): void {
    //
  }

  public getListings(): any {
    return '';
  }

  public getUserName(): string {
    return 'Unknown';
  }

  public setInfo(data: any): void {
    //
    this.isUserLogged = true;
  }

  public isLogged(): boolean {
    return this.isUserLogged;
  }
}
