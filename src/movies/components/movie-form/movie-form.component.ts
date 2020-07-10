import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'mb-movie-form',
  styleUrls: ['./movie-form.component.scss'],
  templateUrl: './movie-form.component.html',
})
export class MovieFormComponent implements OnChanges {
  exists = false;

  movieGenres: string[] = [
    'Sci-fi',
    'Adventure',
    'Comedy',
    'Thriller',
    'Drama',
    'Romance',
    'Fantasy',
  ];

  @Input()
  movie: Movie;

  @Output()
  create = new EventEmitter<Movie>();

  @Output()
  update = new EventEmitter<Movie>();

  form = this.fb.group({
    director_name: ['', Validators.required],
    duration: [0, Validators.required],
    movie_title: ['', Validators.required],
    genres: [''],
    language: '',
    country: '',
    title_year: '',
    imdb_score: [0, Validators.required],
    budget: [0, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.movie && this.movie.id) {
      this.exists = true;

      const value = this.movie;
      this.form.patchValue(value);
    }
  }

  get directorNameRequired() {
    return (
      this.form.get('director_name').hasError('required') &&
      this.form.get('director_name').touched
    );
  }

  get durationRequired() {
    return (
      this.form.get('duration').hasError('required') &&
      this.form.get('duration').touched
    );
  }

  get movieTitleRequired() {
    return (
      this.form.get('movie_title').hasError('required') &&
      this.form.get('movie_title').touched
    );
  }

  get imdbScoreRequired() {
    return (
      this.form.get('imdb_score').hasError('required') &&
      this.form.get('imdb_score').touched
    );
  }

  get budgetRequired() {
    return (
      this.form.get('budget').hasError('required') &&
      this.form.get('budget').touched
    );
  }

  createMovie() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateMovie() {
    if (this.form.valid) {
      this.update.emit({ id: this.movie.id, ...this.form.value });
    }
  }
}
