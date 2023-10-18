import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthenticationServiceService } from 'src/app/shared/firebase-authentication-service.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(public router: Router, public authService: FirebaseAuthenticationServiceService) { }

  ngOnInit() {
  }

  Volver(){
    this.router.navigate(['']);
  }
}
