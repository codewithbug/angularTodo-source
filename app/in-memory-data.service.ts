import { InMemoryDbService } from 'angular-in-memory-web-api';
import { taskModel } from './taskModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const tasks=[
      {id:1,taskName:"yeni"},
      {id:2,taskName:"say"},
      {id:3,taskName:"ozunbi"},
      {id:4,taskName:"dossane"}
    ];

    return {tasks};
  }

  genId(tasks: taskModel[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
}
