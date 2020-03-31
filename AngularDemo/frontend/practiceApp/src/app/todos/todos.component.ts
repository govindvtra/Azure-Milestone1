import { Component, OnInit } from '@angular/core';
export class Todo{
  constructor(public id :number,
    public description : string,
    public status : boolean,
    public date : Date
 ){}
   
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
  todos =[ new Todo(1,"To learn angular",true,new Date()),
          new Todo(2,"To learn DevOps",true,new Date()),
          new Todo(3,"To learn Spring",true,new Date())]


  

}
