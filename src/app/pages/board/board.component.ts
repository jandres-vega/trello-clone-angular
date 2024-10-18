import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Dialog} from '@angular/cdk/dialog';
import {Column, ToDo} from '../../models/todo.model';
import {NgForOf} from '@angular/common';
import {TodoDialogComponent} from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NavbarComponent,
    CdkDrag,
    CdkDropList,
    NgForOf,
    CdkDropListGroup
  ],
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0,0,0.2,1);
      }
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0,0,0.2,1);
      }
    `
  ]
})
export class BoardComponent {

  columns:Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: '1',
          title: 'task 1'
        },
        {
          id: '2',
          title: 'task 2'
        },
        {
          id: '3',
          title: 'task 3'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '1',
          title: 'task 1'
        },
        {
          id: '2',
          title: 'task 2'
        },
        {
          id: '3',
          title: 'task 3'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '1',
          title: 'task 1'
        },
        {
          id: '2',
          title: 'task 2'
        },
        {
          id: '3',
          title: 'task 3'
        }
      ]
    }
  ]

  constructor(private dialog:Dialog) {}
  drop(event:CdkDragDrop<any[]>){
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }

  openDialog(todo:ToDo){
    const dialogREf = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo
      }
    })
    dialogREf.closed.subscribe((out) => {
      console.log(out)
    })
  }
}
