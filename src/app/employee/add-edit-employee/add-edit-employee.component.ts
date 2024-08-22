import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../../src/app/apiservice.service';
import { DatePipe } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: ApiserviceService, private datePipe: DatePipe) { }
  @Input() emp: any;
  EmployeeId = "";
  EmployeeName = "";
  Department = "";
  DateOfJoining: any = "";
  PhotoFileName = "";
  PhotoFilePath = "";
  DepartmentList: any = [];

  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {

    this.service.getAllDepartmentNames().subscribe((data: any) => {
      debugger;
      this.DepartmentList = data;
      this.EmployeeId = this.emp.employeeID;
      this.EmployeeName = this.emp.employeeName;
      this.Department = this.emp.department;
      this.DateOfJoining = this.emp.doj;
    });
  }

  addEmployee() {
    debugger;
    var val = {
      employeeID: this.EmployeeId,
      employeeName: this.EmployeeName,
      department: this.Department,
      //doj: this.DateOfJoining,
      doj: this.datePipe.transform(this.DateOfJoining, 'yyyy-MM-dd')
      //PhotoFileName: this.PhotoFileName
    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
    $('#employeeModal').hide();
    setTimeout(() => {
      location.reload();
    }, 0);
  }

  updateEmployee() {
    debugger;
    var val = {
      employeeID: this.EmployeeId,
      employeeName: this.EmployeeName,
      department: this.Department,
      doj: this.DateOfJoining,
      //PhotoFileName: this.PhotoFileName
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
    $('#employeeModal').hide();
    setTimeout(() => {
      location.reload();
    }, 0);
  }
}