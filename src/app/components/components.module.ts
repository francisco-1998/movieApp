import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSliderComponent } from './cast-slider/cast-slider.component';



@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent, CastSliderComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
  ],
  exports:[
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSliderComponent
  ]
})
export class ComponentsModule { }
