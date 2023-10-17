
//FHAY QUE IMPLEMENTAR AUTORIZACION DEL LOGIN
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/*
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router){}
  next() {
    this.router.navigate(['inicio']);
  }
}

/*
export class LoginPage  {
  
  username: string;
  password: string;

  constructor(public navCtrl: NavController, private authService: AuthService) {
    this.username = '';
    this.password = '';
   }
   login(){
    if (this.username && this.password) {
      this.authService.login(this.username, this.password)
        .subscribe(
          data => {
            // Autenticación exitosa, redirige a la página principal
            this.navCtrl.setRoot('HomePage');
          },
          error => {
            // Manejar errores de autenticación, por ejemplo, mostrar un mensaje de error al usuario
            console.error('Error de inicio de sesión: ', error);
          }
        );
    } else {
      // Mostrar un mensaje de error si los campos de nombre de usuario o contraseña están vacíos
      console.error('Por favor, ingrese un nombre de usuario y contraseña válidos');
    }
   }

  

}
*/