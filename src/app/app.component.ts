import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUser:boolean=false; 

  constructor(private authservice: AuthService){
    
  }
  ngOnInit(): void{
    this.authservice.user.subscribe(user=>{
      if(user){
        this.isUser= true;
      }else{
        this.isUser=false;
      }
    })
  }
  logout(){
    this.authservice.logout().then(()=>console.log("déconnexion"))
  }
  title = 'projetangularcamara';
}
