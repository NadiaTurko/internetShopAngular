import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SingUpComponent} from './sing-up/sing-up.component';


const routes: Routes = [
  {path: 'sing-in', component: SignInComponent},
  {path: 'sing-up', component: SingUpComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
