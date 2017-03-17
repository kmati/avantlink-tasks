import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { RouteNotFoundComponent } from './route.not.found.component';
import { TaskListComponent } from './task.list.component';
import { TaskEntryComponent } from './task.entry.component';

const appRoutes: Routes = [
  { path: 'task-list', component: TaskListComponent,  },
  { path: 'task-entry', component: TaskEntryComponent },
  { path: 'task-entry/:id', component: TaskEntryComponent },

  { path: '',   redirectTo: '/task-list', pathMatch: 'full' },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}