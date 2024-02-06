import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: String[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America'
  ];
  public deletedHero?: String;

  public addHero(): void {
    //TODO: Add hero
    this.heroNames.push('New Hero');
  }

  public deleteHero(): void {
    //TODO: Delete hero
    this.deletedHero = this.heroNames.pop();
  }
}
