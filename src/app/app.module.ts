import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DepartmentComponent } from './department/department.component';
import { ShowDepartmentComponent } from './department/show-department/show-department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    DepartmentComponent,
    ShowDepartmentComponent,
    AddEditDepartmentComponent,
    ShowEmployeeComponent,
    EmployeeComponent,
    AddEditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    ApiserviceService,
    provideHttpClient(),
    DatePipe
  ],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }