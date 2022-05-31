import { Component, OnInit } from '@angular/core';
import { qn } from 'src/app/qn/shared3/first.model';
import { EmployeeService } from 'src/app/qn/shared3/first.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qns-list',
  templateUrl: './qns-list.component.html',
  styleUrls: ['./qns-list.component.css']
})
export class QnsListComponent implements OnInit {

  list: qn[];
  constructor(private service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as qn;
      })
    });
  }

  onEdit(emp: qn) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('qns/' + id).delete();
      this.toastr.warning('Deleted successfully','Data');
    }
  }

}
