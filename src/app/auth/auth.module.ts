import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatInputModule, MatRadioModule} from '@angular/material';
import { SingUpComponent } from './sing-up/sing-up.component';

@NgModule({
  declarations: [
    SignInComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,

  ],
  providers: [],
  exports: [
    SignInComponent,
    SingUpComponent
  ]
})
export class AuthModule { }
