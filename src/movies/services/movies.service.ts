import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { AuthService } from '../../auth/shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';
import { from } from 'rxjs';

@Injectable()
export class MovieService {
  moviesRef: AngularFireList<any>;
  movieRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  get uid() {
    return this.authService.user.uid;
  }

  addMovie(movie: Movie) {
    return from(this.firestore.collection('movies').add(movie));
  }

  getMovie(id: string) {
    return this.firestore.collection('movies').doc(id).get();
  }

  getMovies() {
    return this.firestore
      .collection('movies', ref => ref.limit(50).orderBy('imdb_score', 'desc'))
      .valueChanges({ idField: 'id' });
  }

  updateMovie(movie: Movie) {
    const { id, ...data } = movie;
    return from(this.firestore.collection('movies').doc(id).set(data));
  }

  deleteMovie(id: string) {
    return from(this.firestore.doc(`movies/${id}`).delete());
  }

  private errorMgmt(error) {
    console.log(error);
  }
}
