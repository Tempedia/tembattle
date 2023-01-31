import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMessageComponent } from '../components/base/snackbar-message/snackbar-message.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private _snackBar: MatSnackBar) {}

  info(
    msg: string,
    action: string | undefined = undefined,
    icon: string = 'info'
  ) {
    this._snackBar.openFromComponent(SnackbarMessageComponent, {
      data: {
        message: msg,
        action: action,
        icon: icon,
      },
      verticalPosition: 'top',
    });
  }

  warn(msg: string, action: string | undefined = undefined) {
    this.info(msg, action, 'warning');
  }

  error(msg: string, action: string | undefined = undefined) {
    this.info(msg, action, 'report');
  }
}
