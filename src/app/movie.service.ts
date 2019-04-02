import {Injectable} from '@angular/core';
import {Movie} from './movie';
import {Subject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private selectedMovie$ = new Subject<Movie>();
  private apiKey = '7560a3268e9347360687e581449d4941';
  private baseApiUrl = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient) {
  }

  getCurrentMovie() {
    return this.selectedMovie$;
  }


  changeSelectedMovie(movie: Movie) {
    this.selectedMovie$.next(movie);
  }

  searchMovie(query) {
    const params = new HttpParams().set('api_key', this.apiKey).set('query', query);
    return this.http.get(this.baseApiUrl, {params}).pipe(map((res) => res.results));
  }
}
