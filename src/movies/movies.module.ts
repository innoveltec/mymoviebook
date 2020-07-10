import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

// components
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieConfirmDialogComponent } from './components/movie-confirm-dialog/movie-confirm-dialog.component';

// containers
import { MoviesContainer } from './containers/movies/movies.container';
import { MovieContainer } from './containers/movie/movie.container';

import { AuthGuard } from '../auth/shared/guards/auth.guard';

import { MovieService } from './services/movies.service';

export const ROUTES: Routes = [
  { path: '', component: MoviesContainer, canActivate: [AuthGuard] },
  { path: 'new', component: MovieContainer, canActivate: [AuthGuard] },
  { path: ':id', component: MovieContainer, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [MovieService],
  declarations: [
    MoviesContainer,
    MovieContainer,
    MovieFormComponent,
    MovieListComponent,
    MovieConfirmDialogComponent,
  ],
  entryComponents: [MovieConfirmDialogComponent],
})
export class MoviesModule {}
