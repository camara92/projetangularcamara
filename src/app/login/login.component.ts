import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // login
  login(f: { value: User; }) {
    let data:User = f.value
    this.authService.login(data.email, data.password).then((_result)=>{
      console.log("Connexion réussie !")
      this.router.navigate(['home'])
    }).catch((error)=>{
      console.log("Vous avez une erreur  ")

    }
    )
    
  }

}
