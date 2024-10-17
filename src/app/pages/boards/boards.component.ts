import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {faTrello} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleUp,
  faBorderAll,
  faBox,
  faClock, faGear,
  faHeart, faUsers,
  faWaveSquare
} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {CdkAccordion, CdkAccordionItem} from '@angular/cdk/accordion';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    FaIconComponent,
    CdkAccordion,
    CdkAccordionItem,
    NgClass,
    NgForOf
  ],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  protected readonly faTrello = faTrello;
  protected readonly faBox = faBox;
  protected readonly faWaveSquare = faWaveSquare;
  protected readonly faClock = faClock;
  protected readonly faAngleUp = faAngleUp;
  protected readonly faAngleDown = faAngleDown;
  protected readonly faHeart = faHeart;
  protected readonly faBorderAll = faBorderAll;
  protected readonly faUsers = faUsers;
  protected readonly faGear = faGear;

  items = [
    {
      label: 'item 1',
      items: [
        {
          label: 'sub -item 1.1'
        },
        {
          label: 'sub -item 1.2'
        },
        {
          label: 'sub -item 1.3'
        }
      ]
    },
    {
      label: 'item 2',
      items: [
        {
          label: 'sub -item 2.1'
        },
        {
          label: 'sub -item 2.2'
        }
      ]
    },
    {
      label: 'item 3',
      items: [
        {
          label: 'sub -item 3.1'
        },
        {
          label: 'sub -item 3.2'
        },
        {
          label: 'sub -item 3.3'
        }
      ]
    }
  ]


}
