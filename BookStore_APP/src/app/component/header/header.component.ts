import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserSignUpLoginComponent } from '../user-sign-up-login/user-sign-up-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog : MatDialog,private router : Router) { }

  ngOnInit(): void {
  }

  
  openDialog() {
    this.dialog.open(UserSignUpLoginComponent);
  }

  change(){
    this.router.navigate(['/userdashboard'])
  }

  route(){
    this.router.navigate(['/cart'])
  }
}
