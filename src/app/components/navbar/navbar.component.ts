import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonComponent} from '../button/button.component';
import {CdkConnectedOverlay, CdkOverlayOrigin} from '@angular/cdk/overlay';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faBell, faInfoCircle, faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    FaIconComponent
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpen: boolean = false;
  isOpenBody: boolean = false;

  protected readonly faBell = faBell;
  protected readonly faInfoCircle = faInfoCircle;
  protected readonly faUserCircle = faUserCircle;
}
