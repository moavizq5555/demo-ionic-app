import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fireAuth: AngularFireAuth) { }

  async registerUser(email: string, password: string, name: string) {
    return await this.fireAuth.createUserWithEmailAndPassword(email, password)
  }

  async loginUser(email: string, password: string) {
    return await this.fireAuth.signInWithEmailAndPassword(email, password);
  }
}
