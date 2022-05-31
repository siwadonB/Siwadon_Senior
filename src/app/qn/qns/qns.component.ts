import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/qn/shared3/first.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qns',
  templateUrl: './qns.component.html',
  styleUrls: ['./qns.component.css']
})
export class QnsComponent implements OnInit {

  constructor(private service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id:null,
      name: '',
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('qns').add(data);
    else
      this.firestore.doc('qns/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Question & Answer');
  }

}
