import { Component, OnInit } from '@angular/core';
import { MatDialog }         from '@angular/material';
import { LoginComponent }    from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openLoginForm(){
    this.dialog.open(LoginComponent, {width:'410px', height:'330px'});
  }
}
