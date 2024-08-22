import { Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'employee', component: EmployeeComponent },
];
