import { Component, OnInit } from '@angular/core';
import { RangeService } from 'src/app/shared/range.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-compares',
  templateUrl: './compares.component.html',
  styleUrls: ['./compares.component.css']
})
export class ComparesComponent implements OnInit {

  constructor(private service: RangeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      mid: 'number',
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('range').add(data);
    else
      this.firestore.doc('range/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Question & Answer');
  }

}
