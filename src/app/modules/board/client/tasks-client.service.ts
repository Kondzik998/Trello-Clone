import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import type { Task } from '../../../core/models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksClientService {
  private apiURL = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.apiURL}/tasks`);
  }

  post(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.apiURL}/tasks`, task);
  }

  patch(task: Task): Observable<Task> {
    return this.httpClient.patch<Task>(`${this.apiURL}/tasks/${task.id}`, task);
  }

  delete(id: number): Observable<{}> {
    return this.httpClient.delete<{}>(`${this.apiURL}/tasks/${id}`);
  }
}
