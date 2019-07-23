import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  test = true;
  // private router: Router
  constructor() { }

  testFunc() {
    return this.test;
  }




}
