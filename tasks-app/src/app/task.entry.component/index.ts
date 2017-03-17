import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

import swal from 'sweetalert2';

@Component({
  selector: 'task-entry',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class TaskEntryComponent {
  task: Task = {
    task_id: null,
    task_name: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.taskService.getTask(id)
        .then(task => this.task = task);
    } else {
      this.task.task_id = null;
      this.task.task_name = null;
    }
  }

  save(event) {
    const method = this.task.task_id ? 'putTask' : 'postTask';
    this.taskService[method](this.task)
      .then(savedTask => {
        this.task = savedTask;

        swal('Task Saved', 'The task has been saved, you will now be redirected to the Task List', 'success')
          .then(() => {
            this.router.navigateByUrl('/task-list');
          });
      })
      .catch(err => alert(err));
  }
}
