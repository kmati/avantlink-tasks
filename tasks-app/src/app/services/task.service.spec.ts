import { TestBed, async, inject } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Http } from '@angular/http';

import { ConfigService } from '../services/config.service';
import { TaskService } from './task.service';

import { Task } from '../models/task';

import {
    RouterTestingModule
} from '@angular/router/testing';

describe('TaskService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        TaskService
      ],
      declarations: [
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the TaskService instance',
    inject([TaskService], (taskService) => {
      expect(taskService).toBeTruthy();
    })
  );

  it('should get all tasks',
    inject([TaskService], (taskService) => {
      taskService.getTasks()
        .then(tasks => {
          expect(tasks).toBeTruthy();
          expect(tasks instanceof Array).toBeTruthy();
        });
    })
  );

  it('should get an existing task successfully',
    inject([TaskService], (taskService) => {
      const task: Task = {
        task_id: null,
        task_name: 'A NEW TASK'
      };

      function deleteTestTask(taskId) {
        taskService.deleteTask(taskId)
          .then(() => {
            taskService.getTask(taskId)
              .then(foundTask => {
                expect(foundTask).toBeFalsy();
              })
          });
      }

      let savedTaskId;

      taskService.postTask(task)
        .then(savedTask => {
          expect(task.task_name).toBe(savedTask.name);
          expect(savedTask.id).toBeTruthy();

          savedTaskId = savedTask.id;
          return taskService.getTask(savedTask.id);
        })
        .then(foundTask => {
          expect(foundTask.name).toBe(task.task_name);
          expect(foundTask.id).toBe(savedTaskId);
          deleteTestTask(savedTaskId);
        });
    })
  );

  it('should post a new task successfully',
    inject([TaskService], (taskService) => {
      const task: Task = {
        task_id: null,
        task_name: 'A NEW TASK'
      };

      function deleteTestTask(taskId) {
        taskService.deleteTask(taskId)
          .then(() => {

          });
      }

      taskService.postTask(task)
        .then(savedTask => {
          expect(task.task_name).toBe(savedTask.name);
          expect(savedTask.id).toBeTruthy();
          deleteTestTask(savedTask.id);
        });
    })
  );

  it('should put an existing task and modify it successfully',
    inject([TaskService], (taskService) => {
      const task: Task = {
        task_id: null,
        task_name: 'A NEW TASK'
      };

      function deleteTestTask(taskId) {
        taskService.deleteTask(taskId)
          .then(() => {

          });
      }

      taskService.postTask(task)
        .then(savedTask => {
          expect(task.task_name).toBe(savedTask.name);
          expect(savedTask.id).toBeTruthy();

          savedTask.name = 'EDITED TASK NAME';

          return taskService.putTask(savedTask);
        })
        .then(editedTask => {
          expect(task.task_name === editedTask.name).toBeFalsy();
          deleteTestTask(editedTask.id);
        });
    })
  );

  it('should delete an existing task successfully',
    inject([TaskService], (taskService) => {
      const task: Task = {
        task_id: null,
        task_name: 'A NEW TASK'
      };

      function deleteTestTask(taskId) {
        taskService.deleteTask(taskId)
          .then(() => {
            taskService.getTask(taskId)
              .then(foundTask => {
                expect(foundTask).toBeFalsy();
              })
          });
      }

      taskService.postTask(task)
        .then(savedTask => {
          expect(task.task_name).toBe(savedTask.name);
          expect(savedTask.id).toBeTruthy();
          deleteTestTask(savedTask.id);
        });
    })
  );

});
