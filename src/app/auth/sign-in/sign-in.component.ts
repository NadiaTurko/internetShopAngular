import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {API_Response} from '../../interfaces/API_Response';
import {LoginInterface} from '../../interfaces/loginInterface';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }
  login(loginForm: LoginInterface) {
    console.log('login', this.form.value);
    this.authService.login(loginForm).subscribe((data: API_Response ) => {
      console.log(data.msg);
      // if (data.success) {
      //   localStorage.setItem('token', data.msg);
      // }
    });
  }
}

