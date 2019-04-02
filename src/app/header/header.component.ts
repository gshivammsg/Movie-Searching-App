import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  backToSearch() {
    this.movieService.changeSelectedMovie(null);
  }
}
