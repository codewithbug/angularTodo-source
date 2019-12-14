import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';
import { taskModel } from '../taskModel';
import { map, switchMap } from 'rxjs/operators';
import { from, of, empty } from 'rxjs';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : taskModel[];

  

  removeTask (taskIndex : number) : void {
    this.taskService.removeTask(taskIndex).subscribe(f=>true);  

  }

  setRenamedIndex(index:number,task:taskModel){
    const evnt=event.target as HTMLElement;
    if(evnt.tagName!="DIV"){return;}

    this.taskService.renamedTaskIndex=index;
    this.taskService.clickedElementIndex=index;
    this.taskService.taskisupdating=task;
  }




  constructor(
    public taskService:TasksService
  ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      tasks=>this.tasks=tasks
    );


  }



}
