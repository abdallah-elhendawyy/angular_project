import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common'; // Import NgIf

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form);
    }
  }
}
