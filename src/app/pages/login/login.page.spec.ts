import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [FormsModule, ReactiveFormsModule, IonicModule.forRoot(), TranslateModule.forRoot(),HttpClientModule,AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule],
       
    });
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
