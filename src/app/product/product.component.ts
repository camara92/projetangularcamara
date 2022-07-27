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
  total:number=0;
  handler: any=null;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.loadStripe();
  }
  buy(f: { value: any; }):void {
    let data = f.value
    this.quantities = data.quantity
    console.log("Quantité : "+this.quantities)
    this.total= this.quantities*5; 
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

  /***************************paiment  *************************/
  pay(total: number){
    var handler= (<any>window).StripeCheckout.configure({
      key:'pk_test_aeUUjYYcx4XNfKVW60pmHTtI', 
      locale: 'auto', 
      token: function (token:any){
        console.log(token)
        alert('La commande est bien prise en compte. Merci'); 
      }
    }); 
    handler.open({
      name:"Mes produits", 
      description: "Bananes Bio", 
      total: total*100
    })
  }
  loadStripe(){
    if(!window.document.getElementById('stripe-script')){
      var s = window.document.createElement('script');
      s.id= 'stripe-script'; 
      s.type='text/javascript';
      s.src='https://checkout.stripe.com/checkout.js'; 
      s.onload=()=>{
        this.handler=(<any>window).StripeCheckout.configure({
          key:'pk_test_aeUUjYYcx4XNfKVW60pmHTtI', 
          locale: 'auto', 
          token: function (token:any){
            console.log(token)
            alert('Paiement success '); 
          }
        });
      }
      window.document.body.appendChild(s); 
    }

  }
 

}
