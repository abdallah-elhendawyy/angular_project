import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserslistComponent } from './userslist/userslist.component';
import { NgFor, NgForOf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgIf } from '@angular/common';
import { LoginComponent } from "./login/login.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserslistComponent, NgForOf, NgFor, HeaderComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task2';   
}
  