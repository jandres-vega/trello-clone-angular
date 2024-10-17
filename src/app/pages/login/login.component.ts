import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    ButtonComponent
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
