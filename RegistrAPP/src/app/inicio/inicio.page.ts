import { Component, OnInit } from '@angular/core';
import { FirebaseAuthenticationServiceService } from '../shared/firebase-authentication-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( public authService: FirebaseAuthenticationServiceService) { }

  ngOnInit() {
  }

}
