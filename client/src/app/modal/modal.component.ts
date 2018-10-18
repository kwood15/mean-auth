import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent implements OnInit {
  dialogResult = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });
  }
}




