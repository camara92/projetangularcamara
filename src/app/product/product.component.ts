import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  quantities: any; 
  formCommand:boolean = false;
  formProduit: boolean= true;
  message: boolean =false;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  buy(f: { value: any; }):void {
    let data = f.value
    this.quantities = data.quantity
    console.log("Quantité : "+this.quantities)
    this.formCommand=true;
    this.formProduit= false;
  }
  commande(f: any){

    let data: Order= f.value
    data.quantity = this.quantities
    // console.log(" Nom :"+data.name +" Téléphone" +  data.tel+" Adresse :"+ data.adresse+" Quantité :"+ data.quantity)
    this.authservice.commande(data).then(result=>{
      console.log("La commande a été bien enregistré ")
      this.message= true;
    })
    .catch(error=>{
      console.log("Vous avez une error lors de votre commande !")
    })
  }
 

}
