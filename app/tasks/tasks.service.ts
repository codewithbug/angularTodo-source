import { Injectable } from '@angular/core';
import { taskModel } from '../taskModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public serverUrl="api/tasks";
  tasks:taskModel[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public renamedTaskIndex:number;
  public clickedElementIndex : any = "empty"; //vurulan taskin rengini deyismek ucun
  public updatedTask: taskModel;//save edende deyisilen taski request etmek ucun
  public taskisupdating:taskModel;

  getIndex() : any{
    if(this.renamedTaskIndex===0){
      return true;
    }
    return this.renamedTaskIndex;
  }

  resetIndex() : void{
    this.renamedTaskIndex=undefined;
  }



  //rename edilen taski request etmek ucun funksiya:
  save(newTaskName:string):Observable<taskModel>{
    
    return this.http.put<taskModel>(this.serverUrl,this.taskisupdating).pipe(
      tap(_=>this.taskisupdating.taskName=newTaskName)
    )
  }

  addTask(task:taskModel):Observable<taskModel>{
    /*
    var lastTask=this.tasks.length;
    var newTaskId=this.tasks[lastTask-1].id+1;*/
    return this.http.post<taskModel>(this.serverUrl,task).pipe(
      tap((newTask=>this.tasks.push(newTask)))
    )
    //this.tasks.push({id:newTaskId,taskName:task});
  }


  getTasks() : Observable<taskModel[]>{
    return this.http.get<taskModel[]>(this.serverUrl).pipe(
      tap(task=>this.tasks=task)
    );
  }

  removeTask(taskIndex:number) : Observable<taskModel>{
    console.log("silmek isledi");
    const url = `${this.serverUrl}/${taskIndex}`;
    return this.http.delete<taskModel>(url,this.httpOptions).pipe(
      tap(d=>this.tasks.splice(taskIndex,1))
    );
  }





  constructor(
    public http: HttpClient
  ) {
   }





   

}
