import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-message',
  templateUrl: './snackbar-message.component.html',
  styleUrls: ['./snackbar-message.component.scss'],
})
export class SnackbarMessageComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarMessageComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
}
