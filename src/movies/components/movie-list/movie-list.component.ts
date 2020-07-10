import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'mb-movie-list',
  styleUrls: ['./movie-list.component.scss'],
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnChanges {
  @Input() movies: Movie[];

  dataSource: MatTableDataSource<Movie>;

  displayedColumns: any[] = [
    'movie_title',
    'imdb_score',
    'budget',
    'director_name',
    'duration',
    'genres',
    'title_year',
    'action',
  ];

  @ViewChild('paginator', { static: true }) paginator: MatPaginator;

  @Output()
  edit = new EventEmitter<string>();

  @Output()
  delete = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    const moviesChange: SimpleChange = changes.movies;
    this.dataSource = new MatTableDataSource(moviesChange.currentValue);
    this.dataSource.paginator = this.paginator;
  }

  editMovie(movieId: string) {
    this.edit.emit(movieId);
  }

  deleteMovie(movieId: string) {
    this.delete.emit(movieId);
  }

  applyFilter(event: any) {}
}
