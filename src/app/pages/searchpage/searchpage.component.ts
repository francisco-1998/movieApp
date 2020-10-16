import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private peliculaServices:MovieService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      console.log(params.texto);
      //TODO: Llamar al servicio
      this.peliculaServices.buscarPeliculas(params.texto).subscribe(buscadas=>{
        console.log(buscadas);
      })
    })
  }

}
