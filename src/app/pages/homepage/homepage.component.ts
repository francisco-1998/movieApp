import { Component, HostListener, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/cartelera-response';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlide: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const posiciondelscroll = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const posicionmaximadelscroll = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(posiciondelscroll > posicionmaximadelscroll ){
      if(this.peliculaService.cargando){return;}
      this.peliculaService.getCartelera().subscribe(resp=>{
        this.movies.push(...resp.results);
      })
    }
    // console.log({posiciondelscroll,posicionmaximadelscroll});
  }

  constructor(private peliculaService: MovieService) { }

  ngOnInit(): void {
    this.getApiMovie();
  }

  getApiMovie() {
    this.peliculaService.getCartelera().subscribe(data => {
      this.movies = data.results;
      this.moviesSlide=data.results;
    })
  }

}
