import {Component} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMovie: Movie = null;

  constructor(private movieService: MovieService) {
    this.movieService.getCurrentMovie().subscribe((movie) => {
      this.currentMovie = movie;
    });
  }
}
