import { Component, OnInit } from '@angular/core';
import { DialogSingInComponent } from '../../dialog/dialog-sing-in/dialog-sing-in.component';
import { DialogSingUpComponent } from '../../dialog/dialog-sing-up/dialog-sing-up.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  openDialogIn() {
    this.dialog.open(DialogSingInComponent);
  }

  openDialogUp() {
    this.dialog.open(DialogSingUpComponent);
  }

  ngOnInit() {
  }
}
