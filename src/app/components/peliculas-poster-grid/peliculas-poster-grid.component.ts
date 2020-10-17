import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/cartelera-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.movies);
  }

  irDetalle(item:Movie){
    this.router.navigate(['/movie', item.id])
  }

}
