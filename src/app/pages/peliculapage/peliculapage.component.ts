import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../../models/movie.details';
import { Location } from "@angular/common";
import { Cast } from '../../models/creditos';

@Component({
  selector: 'app-peliculapage',
  templateUrl: './peliculapage.component.html',
  styleUrls: ['./peliculapage.component.css']
})
export class PeliculapageComponent implements OnInit {
  public movie: MovieDetails;
  public actores: Cast[];
  constructor(private activatedRoute: ActivatedRoute,
              private peliculaS: MovieService,
              private location: Location,
              private router:Router) { }

  ngOnInit(): void {
    //Forma 2 uti cuando ne quieren mas argmentos
    // const { id } = this.activatedRoute.snapshot.params;
    //Forma 1
    const id = this.activatedRoute.snapshot.params.id
    this.peliculaS.getDetallePeliculas(id).subscribe(resp => {
      if(!resp){
        this.router.navigateByUrl('/home');
        return ;
      }
      this.movie = resp;
    });

    this.peliculaS.getCreditosPeliculas(id).subscribe(cast => {
      this.actores=cast;
      console.log(this.actores);
    })
  }

  regresar() {
    this.location.back();
  }

}
