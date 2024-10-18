import {Component, Inject} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser} from '@fortawesome/free-solid-svg-icons';
import {ButtonComponent} from '../button/button.component';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {ToDo} from '../../models/todo.model';

interface InputData {
  todo:ToDo
}

interface OutputData {
  rta:boolean
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [
    FaIconComponent,
    ButtonComponent
  ],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  protected readonly faClose = faClose;
  protected readonly faCheckToSlot = faCheckToSlot;
  protected readonly faBars = faBars;
  protected readonly faUser = faUser;
  protected readonly faTag = faTag;
  protected readonly faCheckSquare = faCheckSquare;
  protected readonly faClock = faClock;

  todo:ToDo;

  constructor(
    private dialogRef:DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data:InputData
    ) {
    this.todo = data.todo
  }

  close(){
    this.dialogRef.close()
  }
  closeRta(rta:boolean){
    this.dialogRef.close({
      rta: true
    })
  }
}
