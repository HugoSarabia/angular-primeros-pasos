import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/Characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList!: Characters[];

  @Output()
  public onDeleteCharacterEmitter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(index: number): void {
    console.log(index);
  }

  onDelete(index: number): void {
    console.log(index);
    this.onDeleteCharacterEmitter.emit(index);
  }

  onDeleteCharacterId(id?: string): void {
    if(!id) return;
    console.log(id);
    this.onDeleteCharacterById.emit(id);
  }
}
