import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovieConfirmDialogData } from './movie-confirm-dialog-data.model';

@Component({
  selector: 'mb-movie-confirm-dialog',
  templateUrl: './movie-confirm-dialog.component.html',
})
export class MovieConfirmDialogComponent {
  dialogRef: MatDialogRef<MovieConfirmDialogComponent>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: MovieConfirmDialogData) {}
}
