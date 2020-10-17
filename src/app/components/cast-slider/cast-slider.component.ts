import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from '../../models/creditos';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.css']
})
export class CastSliderComponent implements OnInit,AfterViewInit {

  @Input() cast:Cast[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.cast);
  }

  ngAfterViewInit(): void {
    const swiper= new Swiper('.swiper-container',{
      slidesPerView:5.3,
      freeMode:true,
      spaceBetween: 15
    });
  }

}
