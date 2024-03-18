import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  credentails = {
    email : 'moavizq@gmail.com',
    password : 'moaviz1234',
  }
  logoPath: String;
  loginForm: FormGroup;
  constructor(private global:GlobalService, private fb: FormBuilder) {
      this.logoPath = this.global.storage.logo;
      this.loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['',Validators.required],
      });
   }

  async login() {

    if(this.validateForm()){
      localStorage.setItem('is_logged', 'true');
      this.global.helper.navigateRoot('/tabs/tab1');
      this.loginForm.reset();
    }
      
  }

  validateForm(){
    if(this.loginForm.invalid){
      this.global.component.showToast("Fill the form first.");
      return false;
    }
    else if(this.loginForm.get('email')?.value == this.credentails.email && this.loginForm.get('password')?.value == this.credentails.password){
      return true;

    }
    else{
      this.global.component.showToast("Email or password is wrong.");
      return false;
    }

   
   
  }

}
