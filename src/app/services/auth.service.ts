import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Order } from '../model/order.interface';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  user;

  constructor(private afauth:AngularFireAuth, private fs:AngularFirestore) {
    this.user = afauth.user; 
   }
  register(email: string, password: string){
    return this.afauth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string){
    return this.afauth.signInWithEmailAndPassword(email, password)
  }
  commande(order : Order){
    return this.fs.collection('orderes').add(order)
  }
  getOrderes(){
    return this.fs.collection("orderes").snapshotChanges(); 
  }
  logout() {
    return this.afauth.signOut()
  }
}
