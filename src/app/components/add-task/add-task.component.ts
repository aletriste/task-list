import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addOnTask : EventEmitter<Task> = new EventEmitter()
  text : string ="";
  day : string ="";
  reminder: boolean = false;
  showAddTask : boolean = false;
  subscription?: Subscription;

  constructor( private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(this.text.length === 0){
      alert("la tarea no puede estar vacia")
    }
    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder

    }
    return this.addOnTask.emit(newTask)
  }
}
