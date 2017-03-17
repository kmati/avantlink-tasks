import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { RouteNotFoundComponent } from './route.not.found.component';
import { TaskListComponent } from './task.list.component';
import { TaskEntryComponent } from './task.entry.component';

import { ConfigService } from './services/config.service';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    RouteNotFoundComponent,
    TaskListComponent,
    TaskEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
