import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Cartelera } from './models/cartelera-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieApp';

  constructor(private peliculaService:MovieService) {
    this.peliculaService.getCartelera().subscribe(data=>{
      console.log(data);
    })
  }
}
