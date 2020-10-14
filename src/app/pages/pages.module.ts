import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { PeliculapageComponent } from './peliculapage/peliculapage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';



@NgModule({
  declarations: [HomepageComponent, PeliculapageComponent, SearchpageComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
