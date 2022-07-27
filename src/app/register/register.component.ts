import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.interface';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  register(f: { value: User; }) {
    let data:User = f.value
    this.authService.register(data.email, data.password).then((_result)=>{
      console.log("Succes !")
    }).catch((error)=>{
      console.log("Vous avez une erreur  ")

    }
    )
    
  }

}



