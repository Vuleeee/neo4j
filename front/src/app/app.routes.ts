import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { JeloListaComponent } from './jelo-lista/jelo-lista.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'dodaj',
    component: DodajComponent,
    title: 'Dodaj Jelo'
  },
  {
    path: 'listaJela',
    component: JeloListaComponent,
    title: 'Lista Jela'
  }
];

export default routeConfig;
