import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(imagenPoster: string): string {
    if(imagenPoster){
      return `https://image.tmdb.org/t/p/w500${imagenPoster}`

    }
    return './assets/no-image.jpg';
  }

}
