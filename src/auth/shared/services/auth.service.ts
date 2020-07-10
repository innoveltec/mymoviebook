import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private af: AngularFireAuth) {
    this.af.authState.subscribe(user => {
      if (user) {
        const loggedInUser: User = {
          email: user.email,
          uid: user.uid,
          authenticated: true,
        };
        localStorage.setItem('user', JSON.stringify(loggedInUser));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  get user() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  get authState() {
    return this.af.authState;
  }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.af.auth.signOut();
    localStorage.removeItem('user');
  }
}
