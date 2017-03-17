import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from './config.service';
import { Task } from '../models/task';

@Injectable()
export class TaskService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Application-ID': this.configService.configuration.applicationId
  });

  private get tasksUrl() {
    return `${this.configService.configuration.serviceBaseUrl}/tasks`;
  }
  
  constructor(private http: Http, private configService: ConfigService) { }
  
  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl, { headers: this.headers })
               .toPromise()
               .then(response => response.json().data as Task[])
               .catch(this.handleError);
  }

  getTask(id: number): Promise<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as Task)
      .catch(this.handleError);
  }

  postTask(task: Task): Promise<Task> {
    return this.http
      .post(this.tasksUrl, JSON.stringify({ name: task.task_name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  putTask(task: Task): Promise<Task> {
    const url = `${this.tasksUrl}/${task.task_id}`;
    return this.http
      .put(url, JSON.stringify({ id: task.task_id, name: task.task_name }), { headers: this.headers })
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  deleteTask(id: number): Promise<void> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[TaskService] Error occurred:', error);
    return Promise.reject(error.message || error);
  }
}
