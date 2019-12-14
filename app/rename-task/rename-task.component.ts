import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'rename-task',
  templateUrl: './rename-task.component.html',
  styleUrls: ['./rename-task.component.css']
})
export class RenameTaskComponent implements OnInit {

  public newTaskName:string="";

  //rename edilecek task olub olmadigin yoxlayir ve uygun olaraq rename componentin gosterir ( ve ya itirir)

  taskWillUpdate() : any {
    
    return this.taskService.getIndex();

  }

  saveNewName(){
    this.taskService.resetIndex();

    //this.newTaskName="";

    //save duymesine basanda taskdaki yasil rengi silmek ucun:

    this.taskService.clickedElementIndex="empty";
    this.taskService.save(this.newTaskName).subscribe(u=>console.log("isledi"));
  }




  constructor(
    public taskService:TasksService
  ) { }

  ngOnInit() {
  }

}
