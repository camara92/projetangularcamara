import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderesComponent } from './orderes/orderes.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "home", component: ProductComponent },
  {
    path: 'login', component: LoginComponent
  },
  { path: "register", component: RegisterComponent },
  { path: "orderes", component: OrderesComponent },
  { path: "**", component: ProductComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
