import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/cartelera-response';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private peliculaService: MovieService) { }

  ngOnInit(): void {
    this.getApiMovie();
  }

  getApiMovie() {
    this.peliculaService.getCartelera().subscribe(data => {
      this.movies = data.results;
    })
  }

}
