import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from '../../../app/apiservice.service';
import $ from 'jquery';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {

  constructor(private service: ApiserviceService) {
   }

  isModalOpen: boolean = true;
  @Input() depart: any;
  DepartmentId = "";
  DepartmentName = '';
  ActivateAddEditDepartComp: boolean = false;

  ngOnInit(): void {
    this.DepartmentId = this.depart.departmentId;
    this.DepartmentName = this.depart.departmentName;
  }

  addDepartment() {
    debugger;
    var dept = {
      departmentId: this.DepartmentId,
      departmentName: this.DepartmentName
    };
    this.service.addDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
    $('#departmentModal').hide();
    setTimeout(() => {
      location.reload();
    }, 0);
  }

  updateDepartment() {
    var dept = {
      departmentId: this.DepartmentId,
      departmentName: this.DepartmentName
    };
    this.service.updateDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
    $('#departmentModal').hide();
    this.isModalOpen = false;
    setTimeout(() => {
      location.reload();
    }, 0);
  }
}