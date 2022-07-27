import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth, private fs:AngularFirestore) { }
  register(email: string, password: string){
    return this.afauth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string){
    return this.afauth.signInWithEmailAndPassword(email, password)
  }
}
