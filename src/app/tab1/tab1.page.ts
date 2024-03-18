import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { characters } from '../interfaces/character-interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allCharacters:characters[] = [];
  dataLoaded: boolean = false;
  skeletonData = [1,2,3,4,5,6,7,8,9,10]
  constructor(private global: GlobalService) {
    
  }
  doRefresh(event: any){
    this.dataLoaded = false;
    this.getCharacterLists(event);
  }
  ionViewWillEnter(){
    this.getCharacterLists();
  }

  openCharacter(character:characters){
    console.log("character---",character);
   this.global.helper.navigateForward('tabs/character-details',{id:character.id});
  }

  getCharacterLists(event?:any){
    this.global.api.getRequest('Characters').subscribe(
      (res) => {
        this.dataLoaded = true;
        this.allCharacters = res;
        if(event){
          event.target.complete();
        }
      },  
      (error) => {
        this.dataLoaded = false;
      }
    );
  }

}
