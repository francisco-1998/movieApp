import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../models/movie.details';
import { Location } from "@angular/common";

@Component({
  selector: 'app-peliculapage',
  templateUrl: './peliculapage.component.html',
  styleUrls: ['./peliculapage.component.css']
})
export class PeliculapageComponent implements OnInit {
  public movie: MovieDetails;
  constructor(private activatedRoute:ActivatedRoute, private peliculaS:MovieService,
    private location:Location) { }

  ngOnInit(): void {
    //Forma 2 uti cuando ne quieren mas argmentos
    // const { id } = this.activatedRoute.snapshot.params;
        //Forma 1
    const id = this.activatedRoute.snapshot.params.id
    this.peliculaS.getDetallePeliculas(id).subscribe(resp=>{
      this.movie=resp;
    })
  }

  regresar(){
    this.location.back();
  }

}
