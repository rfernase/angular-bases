import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import {v4 as uuid}  from 'uuid';

@Injectable({

  providedIn: 'root'
})
export class DbzService {
  public characters: Character[]=[{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power:9500
  },
  {
    id: uuid(),
    name: 'Trunks',
    power:7000
  }];

  addCharacter(character:Character): void{
    // console.log('MainPage');
    //   console.log(character);
    const newCharacter:Character = {
      id:uuid(),
      name:character.name,
      power:character.power

    }
    this.characters.push(character);
    // console.log(this.characters);
  }

  // onDeleteCharacter(index:number) {
  //   console.log(index);
  //   this.characters.splice(index,1);
  //   console.log(this.characters);
  // }
  deleteCharacterById (id:string){
      this.characters = this.characters.filter(character => character.id != id);
  }

}
