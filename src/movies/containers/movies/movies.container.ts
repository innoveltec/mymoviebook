import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { BehaviorSubject } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MovieService } from '../../services/movies.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieConfirmDialogComponent } from '../../components/movie-confirm-dialog/movie-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mb-movies',
  styleUrls: ['./movies.container.scss'],
  templateUrl: './movies.container.html',
})
export class MoviesContainer implements OnInit, OnDestroy {
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$ = this.loadingSubject.asObservable();
  movie$ = this.moviesSubject.asObservable();

  MovieData: Movie[] = [];

  constructor(
    private moviesService: MovieService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  ngOnDestroy(): void {}

  loadMovies() {
    this.loadingSubject.next(true);
    this.moviesService
      .getMovies()
      .pipe(untilDestroyed(this))
      .subscribe(movies => {
        this.MovieData = [];
        movies.forEach((movieDoc: any) => {
          const movie: Movie = {
            id: movieDoc.id,
            director_name: movieDoc.director_name,
            duration: movieDoc.duration,
            movie_title: movieDoc.movie_title,
            genres: Array.isArray(movieDoc.genres)
              ? movieDoc.genres
              : movieDoc.genres.split('|'),
            language: movieDoc.language,
            country: movieDoc.country,
            title_year: movieDoc.title_year,
            imdb_score: movieDoc.imdb_score,
            budget: movieDoc.budget,
          };

          this.MovieData.push(movie);
        });
        console.log(this.MovieData);
        this.moviesSubject.next(this.MovieData);
        this.loadingSubject.next(false);
      });
  }

  onDeleteMovie(id: string) {
    const dlg = this.dialog.open(MovieConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this movie?' },
    });

    dlg
      .afterClosed()
      .pipe(untilDestroyed(this))
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.moviesService
            .deleteMovie(id)
            .pipe(untilDestroyed(this))
            .subscribe(res => {
              this.snackbar.open('movie is deleted', 'removed', {
                duration: 5000,
              });
            });
        }
      });
  }

  onEditMovie(movieId: string) {
    this.router.navigate(['/movies', movieId]);
  }
}
