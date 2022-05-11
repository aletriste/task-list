import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { TASK } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task :Task[] = [];
  constructor(private taskService :TaskService) {
    
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task)=>(this.task = task));
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=> this.task = this.task.filter((t) => t.id !== task.id))
  }
}
