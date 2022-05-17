import { Injectable } from '@angular/core';
import { TASK } from '../mock-task';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl ="http://localhost:3000/task"
  constructor(private http:HttpClient) { }
  
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
  
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
  updateTaskRemidert(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task, httpOptions);
  }  
  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task, httpOptions);
  }  
}
