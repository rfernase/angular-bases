
import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
      name: '',
      power:0
  };

  emitCharacter(): void {

    //debugger;
    console.log(this.character)
    if (this.character.name.length === 0) return;
    let nuevoCharacter: Character = this.character;
    this.onNewCharacter.emit(nuevoCharacter);
    console.log('Este es mi nuevo character');
    console.log(nuevoCharacter);




   // this.character.name = '';
   // this.character.power = 0;
  }
}
