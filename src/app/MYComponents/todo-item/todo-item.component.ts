import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
// import { EventEmitter } from 'stream';
// import { Todo } fro../Todoodo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
// @Input() todo:Todo;
@Input() todo: Todo = { sno: 0, title: '', desc: '', active: false }; // Default value
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
constructor(){}
onClick(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("triggered");
  
}
onCheckBoxClick(todo=this.todo){
  // console.log(todo);
  this.todoCheckbox.emit(todo);
  console.log(todo);

  
}
}
