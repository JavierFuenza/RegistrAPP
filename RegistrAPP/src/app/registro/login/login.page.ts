
//FHAY QUE IMPLEMENTAR AUTORIZACION DEL LOGIN
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthenticationServiceService } from 'src/app/shared/firebase-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public router: Router, 
  public authService: FirebaseAuthenticationServiceService){}

  ngOnInit() {}
  

  logIn(email: any, password: any) {
    this.authService
      .SignIn(email.value, password.value)
      .then((): any => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['inicio']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  Olvido(){
    this.router.navigate(['recuperar'])
  }
}


