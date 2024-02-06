import { Injectable } from '@angular/core';
import { Characters } from '../interfaces/Characters.interface';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Characters[] = [
    {
      id: v4(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: v4(),
      name: 'Vegeta',
      power: 8500,
    },
  ];
  addCharacter(character: Characters): void {
    const newCharacter: Characters = {...character, id: v4()};
    this.characters.push(newCharacter);
  }
  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
  deleteCharacterById(id: string): void {
    console.log('deleteCharacterById', id);
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
