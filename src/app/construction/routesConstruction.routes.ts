import { Routes } from '@angular/router';
export const routesConstruction: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio-page/inicio-page.component').then(
        (c) => c.InicioPageComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about-page/about-page.component').then(
        (c) => c.AboutPageComponent
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto-page/contacto-page.component').then(
        (c) => c.ContactoPageComponent
      ),
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./pages/proyectos-page/proyectos-page.component').then(
        (c) => c.ProyectosPageComponent
      ),
  },
];
