import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, 
    private messageService: MessageService) { }
  
    ngOnInit(): void {
      this.getHeroes();
    }

    onSelect(hero: Hero): void {
      
      //current date and time
      const current = new Date();
      const currentDate = current.toDateString();
      const currentTime = current.toLocaleTimeString();


      this.selectedHero = hero;
      this.messageService.add(
        `HeroesComp.- ${hero.id}`+
                  `, ${hero.name}`+`
        , selected at: ` + currentDate + `, ` +  currentTime);
    }
  
    getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

}
