import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage  {
  logoPath: String;
  registrationForm: FormGroup ;
  constructor(private authService: AuthenticationService, private fb: FormBuilder,private global:GlobalService,private translate:TranslateService) { 
    this.logoPath = this.global.storage.logo;
    this.registrationForm = this.fb.group({
      fullname: ['', [Validators.required]],
      contact: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
      ]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        Validators.required,
      ]],
      confirmPassword: ['', [
        Validators.required,
      ]],
    }, {
      validators: this.passwordsMatchValidator // Add custom validator for password matching
    });
  }
  passwordsMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl?.value !== confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }
  get errorControl() {
    return this.registrationForm.controls;
  }

  async register() {
  
    if (this.registrationForm.valid) {
      const loading = await this.global.component.showLoader();
      await loading.present();

      this.authService.registerUser(this.registrationForm.value.email, this.registrationForm.value.password,this.registrationForm.value.fullname).catch((err) => {
        loading.dismiss();
      }).then((user)=>{
        if (user) {
          loading.dismiss();
          this.global.component.showSuccessToast(this.translate.instant('registeredSuccessfull'));
          this.global.helper.navigateRoot('/login')
        }
      })

     
    } else {
      return this.global.component.showToast(this.translate.instant('formErrorOne'));
    }
      
  }

  tologin(){
    this.global.helper.navigateForward('login');
  }

}
