import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characters } from 'src/app/interfaces/character-interface';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage{
  eachCharacter!: characters; 
  characterName:String | undefined; 
  dataLoaded: boolean = false;
  constructor(private route: ActivatedRoute,private global :GlobalService) { 
    this.getCharacterDetails(this.route.snapshot.params);
  }
  

  getCharacterDetails(param?:any){
    this.characterName = param.name;
    this.global.api.getRequest('Characters/'+param.id).subscribe(
      (res) => {
       this.eachCharacter = res;
       this.dataLoaded = true;
      },  
      (error) => {
        this.dataLoaded = false;
      }
    );
  }

  locationBack(){
    this.global.helper.locationBack();
  }


}
