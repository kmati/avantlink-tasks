import { Component } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

import swal from 'sweetalert2';

@Component({
  selector: 'task-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    taskService.getTasks()
      .then(tasks => this.tasks = tasks);
  }

  deleteTask(taskId) {
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this task!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(
      // Confirm clicked
      () => {
        this.taskService.deleteTask(taskId)
          .then(() => {
            this.tasks = this.tasks.filter(t => t.task_id !== taskId);
            swal(
              'Task Deleted',
              'The task has been deleted.',
              'success'
            )
          })
      },
      
      // Cancel clicked
      dismiss => {
      }
    )
  }
}
