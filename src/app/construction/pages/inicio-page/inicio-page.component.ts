import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { ServiciosPageComponent } from '../../components/servicios-page/servicios-page.component';
import { PreguntasFrecuentesComponent } from '../../../shared/components/preguntas-frecuentes/preguntas-frecuentes.component';
import { ContactoComponent } from '../../../shared/components/contacto/contacto.component';

@Component({
  selector: 'app-inicio-page',
  imports: [
    CarouselComponent,
    CommonModule,
    ServiciosPageComponent,
    PreguntasFrecuentesComponent,
    ContactoComponent,
  ],
  standalone: true,
  templateUrl: './inicio-page.component.html',
  styles: ``,
})
export class InicioPageComponent {}
