import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/member.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manages',
  templateUrl: './manages.component.html',
  styleUrls: ['./manages.component.css']
})
export class ManagesComponent implements OnInit {

  constructor(private service: MemberService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      age: '',
      job: '',
      school:'',
      sex:'',
      user_name:'',
      user_password:'',
      result:'',
      rs:'number',
      sum :'',


    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('members').add(data);
    else
      this.firestore.doc('members/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Question & Answer');
  }

}