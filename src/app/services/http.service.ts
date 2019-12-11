import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  loginUser( data: object ) {
    let returnVal: Boolean = false;

    if ( data['user-name'] === '333' ) {
      returnVal = true;
    }

    return returnVal;

  }

}
