import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logoPath:String;
  appPages = [
    {
      title: 'About me',
      url: 'about-me',
      icon: 'person',
    },
    {
      title: 'Logout',
      url: 'logout',
      icon: 'log-out',
    },
  ];
  constructor(private global:GlobalService) {
    this.logoPath = this.global.storage.logo;
    this.global.helper.initalizei18n();

   }

  ngOnInit() {
  }

  navigate(url:string) {
    if (url == 'logout') {
      this.global.helper.logout();
    } else {
      this.global.helper.navigateForward(url);
    }
  }

}
