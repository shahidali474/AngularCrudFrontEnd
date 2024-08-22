import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { ApiserviceService } from '../../../app/apiservice.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  constructor(private service: ApiserviceService, private cdr: ChangeDetectorRef) {
   }

  isModalOpen: boolean = true;
  DepartmentList: any[] = [];
  ModalTitle = "";
  ActivateAddEditDepartComp: boolean = false;
  depart: any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    debugger;
    this.depart = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepartComp = true;
  }

  editClick(item: any) {
    debugger;
    this.depart = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepartComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteDepartment(item.departmentId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick() {
    debugger;
    this.ActivateAddEditDepartComp = false;
    this.refreshDepList();
  }


  refreshDepList() {
    this.service.getDepartmentList().subscribe(data => {
      this.DepartmentList = data;
      this.cdr.detectChanges();
    });
  }

  // sortResult(prop: any, asc: any) {
  //   this.DepartmentList = this.DepartmentListWithoutFilter.sort(function (a: any, b: any) {
  //     if (asc) {
  //       return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
  //     }
  //     else {
  //       return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
  //     }
  //   });
  // }

//   FilterFn() {
//     var DepartmentIdFilter = this.DepartmentIdFilter;
//     var DepartmentNameFilter = this.DepartmentNameFilter;

//     this.DepartmentList = this.DepartmentListWithoutFilter.filter(
//       function (el: any) {
//         return el.DepartmentId.toString().toLowerCase().includes(
//           DepartmentIdFilter.toString().trim().toLowerCase()
//         ) &&
//           el.DepartmentName.toString().toLowerCase().includes(
//             DepartmentNameFilter.toString().trim().toLowerCase())
//       }
//     );
//   }
}