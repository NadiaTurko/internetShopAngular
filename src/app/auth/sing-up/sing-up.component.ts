import {FormBuilder, FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {API_Response} from '../../interfaces/API_Response';
import {RegisterInterface} from '../../interfaces/registerInterface';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firsName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: '',
      dateOfBirth: '',
      sex: '',
      city: '',
      country: '',
      phone: '',
    });
  }
  register(registerForm: RegisterInterface) {
    console.log('register', this.form.value);
    this.authService.register(registerForm).subscribe((data: API_Response ) => {
   console.log(data.msg);
    });
  }
}
