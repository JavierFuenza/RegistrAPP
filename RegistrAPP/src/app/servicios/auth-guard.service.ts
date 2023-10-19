import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authService:AuthenticationService,
    public router:Router
  ) { }
  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}
