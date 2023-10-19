import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';
import { Usuario } from 'shared/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioListRef: AngularFireList<any>
  usuarioRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  //Create
  /*
  crearUsuario(user: Usuario) {
    return this.usuarioListRef.push({
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    })
  }

  //Get Single
  getUsuario(id: string){
    this.usuarioRef = this.db.object('/usuario/' + id);
    return this.usuarioRef;
  }

  //Get list  
  getUsuarioList(){
    this.usuarioListRef = this.db.list('/usuario');
    return this.usuarioListRef;
  }

  //Update
  updateUsuario(id: any, user: Usuario){
    return this.usuarioRef.update({
      nombre: user.name,
      email: user.email,
      contra: user.contra
    })
  }

  //Delete
  deleteUsuario(id: string){
    this.usuarioRef = this.db.object('/usuario/' + id);
    this.usuarioRef.remove();
  }
  */
}
