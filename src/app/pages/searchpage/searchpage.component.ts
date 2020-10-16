import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/cartelera-response';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  movies: Movie[] = [];
  termino:string;
  constructor(private activateRoute: ActivatedRoute, private peliculaServices:MovieService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      console.log(params.texto);
      this.termino=params.texto;
      //TODO: Llamar al servicio
      this.peliculaServices.buscarPeliculas(this.termino).subscribe(buscadas=>{
        this.movies = buscadas;
      })
    })
  }

}
