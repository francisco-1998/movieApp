import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { PeliculapageComponent } from './pages/peliculapage/peliculapage.component';



const rutas:Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'movie/:id',
    component: PeliculapageComponent
  },
  {
    path: 'search/:texto',
    component: SearchpageComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
