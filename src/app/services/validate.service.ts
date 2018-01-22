import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  public password(value: string): boolean {
    if (this.hasAlphaNumeric(value)) {
      return true;
    }
    return false;
  }

  private hasAlphaNumeric(value: string): boolean {
    return false;
  }
}
