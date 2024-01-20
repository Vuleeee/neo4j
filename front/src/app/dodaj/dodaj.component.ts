import { Component } from '@angular/core';
import { DishService } from '../dish.service';
import { RouterOutlet,Router } from '@angular/router';
import { Dish } from '../models/dish';


@Component({
  selector: 'app-dodaj',
  standalone: true,
  imports: [],
  templateUrl: './dodaj.component.html',
  styleUrl: './dodaj.component.css'
})
export class DodajComponent {
  constructor(private router: Router, private dishService: DishService) { }
  returnHome(){
    this.router.navigate(['']);
  }
  jeloId: number = 0;
  naziv: string = 'test';
  opis: string = 'test';
  nacinPripreme: string = 'test';
  sastojci: string='Jaja';
  rejting: { low: number; high: number }= { low: 10, high: 0 };
  jednoJelo = new Dish(this.jeloId, this.naziv, this.opis, this.rejting, this.sastojci, this.nacinPripreme);

  dodajJeloDugme(event: Event){
    event.preventDefault();
    console.log("dodajem jelo",this.jednoJelo);
    this.dishService.dodajJelo(this.jednoJelo);
    this.dishService.fetchData5(this.jednoJelo);
  }
}
