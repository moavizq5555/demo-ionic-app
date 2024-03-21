import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(private global:GlobalService, private fb: FormBuilder,private menu: MenuController,private translate:TranslateService) {
      this.logoPath = this.global.storage.logo;
      this.loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['',Validators.required],
      });
   }

  async login() {

    if(this.validateForm()){
      localStorage.setItem('is_logged', 'true');
      this.menu.enable(true);
      this.global.helper.navigateRoot('characters-list');
      this.loginForm.reset();
    }
      
  }

  validateForm(){
    if(this.loginForm.invalid){
      this.global.component.showToast(this.translate.instant('formErrorOne'));
      return false;
    }
    else if(this.loginForm.get('email')?.value == this.credentails.email && this.loginForm.get('password')?.value == this.credentails.password){
      return true;

    }
    else{
      this.global.component.showToast(this.translate.instant('formErrorTwo'));
      return false;
    }

   
   
  }

}
