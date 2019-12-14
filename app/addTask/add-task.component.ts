import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';
import { taskModel } from '../taskModel';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTask(taskName:string):void{
    taskName=taskName.trim();
    this.taskService.addTask({taskName} as taskModel).subscribe();

  }


  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

}
