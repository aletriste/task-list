import { Injectable } from '@angular/core';
import { TASK } from '../mock-task';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl ="http://localhost:3000/task"
  constructor(private http:HttpClient) { }
  
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
  
  deleteTask(task:Task): Observable<Task[]>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task[]>(url);
  }
}
