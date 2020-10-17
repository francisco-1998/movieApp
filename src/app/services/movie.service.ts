import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { tap , map, catchError} from 'rxjs/operators';
import { Cartelera } from '../models/cartelera-response';
import { Movie } from 'src/app/models/cartelera-response';
import { MovieDetails } from '../models/movie.details';
import { Creditos } from '../models/creditos';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;
  constructor(private http:HttpClient) { }

  get params(){
    return {
      api_key: '08142d9351171e224683a4c8cfe1c85f',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }


  getCartelera():Observable<Cartelera>{
    if(this.cargando){
      return ;
    }
    console.log('Cargando');
    this.cargando=true;
    return this.http.get<Cartelera>(`${this.url}/movie/popular?`,{params:this.params}).pipe(
      tap(()=>{
        this.carteleraPage+=1;
        this.cargando = false;
      })
    )
  }

  resetHome(){
    this.carteleraPage=1;
  }

  buscarPeliculas(texto:string):Observable<Movie[]>{
      const parametros = {...this.params, page:'1',query:texto}
    return this.http.get<Cartelera>(`${this.url}/search/movie`,{params:parametros}).pipe(
      map(resp=>resp.results)
    )
  }

  getDetallePeliculas(id:String){
    return this.http.get<MovieDetails>(`${this.url}/movie/${id}`, {params: this.params}).pipe(
      catchError(err=>of(null))
    )
  }

  getCreditosPeliculas(id:String){
    return this.http.get<Creditos>(`${this.url}/movie/${id}/credits`, {params: this.params}).pipe(
      map(resp=>resp.cast),
      catchError(err=>of([])),
    )
  }
}
