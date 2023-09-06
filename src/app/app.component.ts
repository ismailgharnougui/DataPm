import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {InviteDialogComponent} from "./invite-dialog/invite-dialog.component";
import {NotifComponent} from "./notif/notif.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datapm';

  constructor(public dialog: MatDialog, private router: Router) {
  }

  openDialog(): void {
    this.dialog.open(InviteDialogComponent, {
      height: '80%',
      width: '25%'
    })

  }

  openDialogNotif(): void {
    this.dialog.open(NotifComponent, {
      height: '25%',
      width: '50%'
    })
  }

  openDialogDashboard(): void {
    this.router.navigate(["dashboard"]);

  }

}
