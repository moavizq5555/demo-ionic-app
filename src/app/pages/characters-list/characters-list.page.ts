import { Component } from '@angular/core';
import { characters } from 'src/app/interfaces/character-interface';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage  {

  allCharacters:characters[] = [];
  dataLoaded: boolean = false;
  skeletonData = [1,2,3,4,5,6,7,8,9,10]
  constructor(private global: GlobalService) {
    this.getCharacterLists();
  }
  doRefresh(event: any){
    this.dataLoaded = false;
    this.getCharacterLists(event);
  }
 

  openCharacter(character:characters){
   this.global.helper.navigateForward('character-details',{id:character.id,name:character.fullName});
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
