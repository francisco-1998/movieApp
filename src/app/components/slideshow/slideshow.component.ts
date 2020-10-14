import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  @Input() public peliculas: Movie[];
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

}
