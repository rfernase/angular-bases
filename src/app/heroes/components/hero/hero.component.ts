import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 24;
// UTILIZAMOS LOS GET PARA QUE UN METODO SE VEA COMO UNA PROPIEDAD Y PODER PONERLO ENTRE{{}} EN HTML
  get capitalizedName():string{
      return this.name.toUpperCase();

  }
// HACEMOS UN METODO
getHeroDescription():string{
  return `${this.name}-${this.age}`;

}
  heroChange( ): void{
    this.name = 'Spiderman';
  }

  ageChange():void{
    this.age = 25;
  }
  resetAgeName(){

    this.age = 45;
    this.name = 'Ironman';
    document.querySelectorAll('h1')!.forEach( element =>{element.innerHTML = '<h1>Desde Angular</h1>';});
  }
}
