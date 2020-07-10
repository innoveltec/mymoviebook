import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mb-movie',
  styleUrls: ['./movie.container.scss'],
  templateUrl: './movie.container.html',
})
export class MovieContainer implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private moviesService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.movie$ = this.route.params.pipe(
      untilDestroyed(this),
      switchMap(param => {
        if (param.id) {
          return this.moviesService.getMovie(param.id);
        } else {
          return of(null);
        }
      }),
      map(movieDoc => {
        let movie: Movie;
        if (movieDoc && movieDoc.data() && movieDoc.id) {
          movie = {
            id: movieDoc.id,
            director_name: movieDoc.data().director_name,
            duration: movieDoc.data().duration,
            movie_title: movieDoc.data().movie_title,
            genres: Array.isArray(movieDoc.data().genres)
              ? movieDoc.data().genres
              : movieDoc.data().genres.split('|'),
            language: movieDoc.data().language,
            country: movieDoc.data().country,
            title_year: movieDoc.data().title_year,
            imdb_score: movieDoc.data().imdb_score,
            budget: movieDoc.data().budget,
          };
        } else {
          movie = {
            director_name: '',
            duration: 0,
            movie_title: '',
            genres: [],
            language: '',
            country: '',
            title_year: 0,
            imdb_score: 0,
            budget: 0,
          };
        }
        return movie;
      })
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {}

  onCreate(movie: Movie): void {
    this.moviesService
      .addMovie(movie)
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.backToMovies();
        this.snackbar.open('movie is created', 'saved', {
          duration: 5000,
        });
      });
  }

  onUpdate(movie: Movie): void {
    this.moviesService
      .updateMovie(movie)
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.backToMovies();
        this.snackbar.open('movie has been updated', 'saved', {
          duration: 5000,
        });
      });
  }

  backToMovies() {
    this.router.navigate(['movies']);
  }
}
