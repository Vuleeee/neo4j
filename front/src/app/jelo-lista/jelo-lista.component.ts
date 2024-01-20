import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DishService } from '../dish.service';
import { Dish } from '../models/dish';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-jelo-lista',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './jelo-lista.component.html',
  styleUrl: './jelo-lista.component.css'
})
export class JeloListaComponent {
  constructor(private router: Router, private dishService: DishService, private route: ActivatedRoute) { }
  returnHome(){
    this.router.navigate(['']);
  }

  jelaPoKategoriji: Dish[] = [];
  sastojci: string[] = ["Jaja", "Jabuke"];
  category: string = "";
  sasLista: string = "";
  jelaPoSastojcima: Dish[] = [];
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') ?? '';
      //console.log(this.category);
    });
    this.route.paramMap.subscribe(params => {
      this.sasLista = params.get('userInput') ?? '';
      console.log(this.sasLista);
    });
    if(this.category.length > 0){
    this.dishService.getDataSubject3().subscribe((data3) => {
      this.jelaPoKategoriji = this.dishService.getJelaPoKategoriji(data3);
      console.log(this.jelaPoKategoriji);
    });

    this.dishService.fetchData3(this.category);
  }
  else{
    this.dishService.getDataSubject4().subscribe((data4) => {
      this.jelaPoSastojcima = this.dishService.getJelaPoSastojcima(data4);
      console.log(this.jelaPoSastojcima);
    });

    this.dishService.fetchData4(this.sasLista);
  }
  }

}
