import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {

  constructor(private global :GlobalService) { }

  ngOnInit() {
  }

  locationBack(){
    this.global.helper.locationBack();
  }

}
