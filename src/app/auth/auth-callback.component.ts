import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  template: ''
})
export class AuthCallbackComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.handleAuthCallback();
  }

}
