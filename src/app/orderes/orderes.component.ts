import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-orderes',
  templateUrl: './orderes.component.html',
  styleUrls: ['./orderes.component.css']
})
export class OrderesComponent implements OnInit {

  constructor(private AuthService: AuthService) { }
  orderes: any; 

  ngOnInit(): void {
    this.getOrderes()
  }
getOrderes=()=>this.AuthService.getOrderes().subscribe(result=>(this.orderes= result))
}
