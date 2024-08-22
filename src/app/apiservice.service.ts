import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5194/api/'
};

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {
  private apiUrl = environment.apiUrl;
  //readonly photoUrl = "https://localhost:7215/Photos/";

  constructor(private http: HttpClient) { }

  getDepartmentList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}Department/GetDepartment`);
  }

  addDepartment(dept: any): Observable<any> {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'department/AddDepartment', dept, httpOptions);
  }

  updateDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'department/UpdateDepartment/', dept, httpOptions);
  }

  deleteDepartment(deptId: number): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(`${this.apiUrl}Department/DeleteDepartment/${deptId}`, httpOptions);
  }

  getEmployeeList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}employee/GetEmployee`);
  }

  addEmployee(emp: any): Observable<any> {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(`${this.apiUrl}Employee/AddEmployee`, emp, httpOptions);
  }

  updateEmployee(emp: any): Observable<any> {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(`${this.apiUrl}Employee/UpdateEmployee`, emp, httpOptions);
  }

  // deleteEmployee(empId: number): Observable<number> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.delete<number>(this.apiUrl + 'employee/DeleteEmployee/' + empId, httpOptions);
  // }
  deleteEmployee(empId: number): Observable<any> {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(`${this.apiUrl}employee/DeleteEmployee/${empId}`, httpOptions);
  }

  uploadPhoto(photo: any) {
    return this.http.post(this.apiUrl + 'employee/savefile', photo);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'employee/GetDepartment');
  }
}