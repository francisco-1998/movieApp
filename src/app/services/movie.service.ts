import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cartelera } from '../models/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  constructor(private http:HttpClient) { }

  get params(){
    return {
      api_key: '08142d9351171e224683a4c8cfe1c85f',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }


  getCartelera():Observable<Cartelera>{
    return this.http.get<Cartelera>(`${this.url}/movie/now_playing?`,{params:this.params}).pipe(
      tap(()=>{
        this.carteleraPage+=1;
      })
    )
  }
}
