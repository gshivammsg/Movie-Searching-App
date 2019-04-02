import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {data} from '../mock-data';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: Movie[] = data;
  search: string;
  show = false;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  onMovieChange(movie: Movie) {
    this.movieService.changeSelectedMovie(movie);
  }

  onSearch(query: string) {
    if (query.length > 0) {
      this.movieService.searchMovie(query).subscribe((results: Movie[]) => {
        if (results.length > 0) {
          this.searchResult = results;
          console.log(this.searchResult);
        } else {
          this.show = true;
          console.log('hello');
        }
      });
    } else {
      this.searchResult = [];
      console.log('hi');
    }
  }
}
