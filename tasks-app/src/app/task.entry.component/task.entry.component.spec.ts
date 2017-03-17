import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ConfigService } from '../services/config.service';
import { TaskService } from '../services/task.service';

import { TaskEntryComponent } from './';

import {
    RouterTestingModule
} from '@angular/router/testing';

describe('TaskEntryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        TaskService
      ],
      declarations: [
        TaskEntryComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should have task object', async(() => {
    const fixture = TestBed.createComponent(TaskEntryComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.task).toBeTruthy();
  }));

});
