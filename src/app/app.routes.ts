import { Routes } from '@angular/router';
import { routesConstruction } from './construction/routesConstruction.routes';

export const routes: Routes = [
  {
    path: '',
    children: routesConstruction,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
