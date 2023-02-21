import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  showRightNav=false;
  alertSubscription: Subscription | null = null
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor( ) { }

  ngOnInit(): void {
  }

  ngOnDestroy():void {
    this.alertSubscription?.unsubscribe()
  }

  toggleSideNav(){
    this.showRightNav = !this.showRightNav;
  }

}
