import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm() {
    this.userLoginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    console.log(this.userLoginForm.value);
  }

}