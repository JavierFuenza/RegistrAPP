import { Injectable } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  userInfo: any;

  constructor() { }

  async googleSignup() {
    const googleUser = await GoogleAuth.signIn() as any;
    console.log('my user: ', googleUser);
    this.userInfo = googleUser;
  }
}
