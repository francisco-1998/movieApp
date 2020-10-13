import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Cartelera } from '../models/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'https://api.themoviedb.org/3/movie';
  constructor(private http:HttpClient) { }


  getCartelera():Observable<Cartelera>{
    return this.http.get<Cartelera>(`${this.url}/now_playing?api_key=08142d9351171e224683a4c8cfe1c85f&language=es-ES&page=1`)
  }
}
