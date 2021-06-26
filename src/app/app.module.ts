import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentPreviewComponent } from './departments/department-preview.component';
import { AppRouterModule } from './app-router.module';
import { StrategyExecutionComponent } from './departments/strategy-execution/strategy-execution.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentPreviewComponent,
    StrategyExecutionComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
