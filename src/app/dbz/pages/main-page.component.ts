import { Component, OnInit } from '@angular/core';
import { Characters } from '../interfaces/Characters.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor(
    private dbzService: DbzService,
  ) {

  }
  get characters(): Characters[] {
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id:string):void {
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Characters):void {
    this.dbzService.addCharacter(character);
  }
}

