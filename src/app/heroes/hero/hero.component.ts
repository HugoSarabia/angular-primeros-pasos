import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;
  public aux: boolean = true;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero(): void {
    //TODO: Cambiar el nombre del héroe
    this.aux = !this.aux;
    this.nombre = 'Spiderman';
  }

  changeAge(): void {
    this.aux = !this.aux;
    this.edad = 25;
  }

  resetForm(): void {
    this.nombre = 'Ironman';
    this.edad = 45;
  }
}
