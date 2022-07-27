import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from '../model/order.interface';
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
  commande(order : Order){
    return this.fs.collection('orderes').add(order)
  }
}
