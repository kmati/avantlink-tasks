import { TestBed, async } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { ConfigService } from '../services/config.service';
import { TaskService } from '../services/task.service';

import { TaskListComponent } from '../task.list.component';

import {
    RouterTestingModule
} from '@angular/router/testing';

describe('TaskListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        TaskService
      ],
      declarations: [
        TaskListComponent
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should have tasks array', async(() => {
    const fixture = TestBed.createComponent(TaskListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.tasks).toBeTruthy();
  }));

});
