import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import AngularFireModule from '@angular/fire'
// import {AngularFireModule } from '@angular/fire/compat'
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from './product/product.component'
import { FormsModule } from '@angular/forms';
import { OrderesComponent } from './orderes/orderes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    OrderesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),



  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
