import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DishService } from '../dish.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';
import { Sastojak } from '../models/sastojak';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private dishService: DishService) { }
  addDish(){
    this.router.navigate(['/dodaj']);
  }

  data: any;
  data2: any;
  topRatedDishes: Dish[] = [];
  existingIngredients: Sastojak[] = [];
  jedinstveneKategorije: string[] = [];
  sastojciVraceni: string[] = [];
  ngOnInit()
  {
    this.dishService.getDataSubject().subscribe((data) => {
      const top3Dishes = this.dishService.getTop3Dishes(data);
      this.topRatedDishes = top3Dishes;  
    });

    this.dishService.fetchData();

    this.dishService.getDataSubject2().subscribe((data2) => {
      const existingIngredient = this.dishService.getKategorije(data2);
      console.log(existingIngredient);
      this.existingIngredients = existingIngredient;
      const kategorije: string[] = this.existingIngredients.map(ingredient => ingredient.kategorija);
      this.sastojciVraceni = this.existingIngredients.map(ingredient => ingredient.naziv);

      this.jedinstveneKategorije =  Array.from(new Set(kategorije));
      
    });

    this.dishService.fetchData2();
  }



  ingredientCategories: string[] = ['Voće', 'Povrće', 'Meso', 'Riba', 'Testenine', 'Sirevi', 'Začini'];



  redirectToJelaLista(category: string): void {
    this.router.navigate(['/listaJela', { category: category }]);
  }

  userInput: string = '';

  filteredIngredients: string[] = [];


  filterIngredients() {
    this.filteredIngredients = this.sastojciVraceni.filter((ingredient) =>
      ingredient.toLowerCase().includes(this.userInput.toLowerCase())
    );
  }

  pretragaJela(){
    this.router.navigate(['/listaJela', { userInput: this.userInput }]);
  }
  
}
