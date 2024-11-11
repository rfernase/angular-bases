
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{

    name: 'Trunks',
    power: 1000
  }]


  @Output()
 public  onDelete: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id:string): void {

    //TODO: emitir el ID del personaje
    console.log({id});
    this.onDelete.emit(id);
  }

}
