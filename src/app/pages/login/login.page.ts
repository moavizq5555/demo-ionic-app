import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  logoPath: String;
  loginForm: FormGroup;
  constructor(private global:GlobalService, private fb: FormBuilder,private menu: MenuController,private translate:TranslateService,private authService: AuthenticationService,) {
      this.logoPath = this.global.storage.logo;
      this.loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['',Validators.required],
      });
   }

  async login() {

    if(this.loginForm.valid){
      const loading = await this.global.component.showLoader();
      await loading.present();
            const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).catch((err) => {
              this.global.component.showToast(this.translate.instant('formErrorTwo'));
              loading.dismiss();
            }).then((user)=>{
              if (user) {
                loading.dismiss();
                localStorage.setItem('is_logged', 'true');
                this.menu.enable(true);
                this.global.helper.navigateRoot('characters-list');
                this.loginForm.reset();
              }
            })
    }
    else{
      this.global.component.showToast(this.translate.instant('formErrorOne'));
     
    }
      
  }

  toRegister(){
    this.global.helper.navigateForward('registration');
  }

 

}
