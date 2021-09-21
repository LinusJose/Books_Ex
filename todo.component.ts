import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos:any;
public currency:number=0


onChange(value:number){
  this.currency=value;
}

  constructor(private service:TodoService) {

  
   
    
   }

  ngOnInit() {

    this.service.getTodo()
    .subscribe(Response=>{
      console.log(Response);
      this.todos=Response;
    },error=>console.log(error));
  }

createData(todo){
let data={
  title:todo.value
};


this.service.createTodo(data)
.subscribe(Response=>{
  console.log(Response)
  todo.value='';
  // this.todos.push(Response)
  this.todos.splice(0, 0, data); // shown as first var
})
  }

}
