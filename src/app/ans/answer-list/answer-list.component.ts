import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/ans/shared2/answer.model'
import { AnswerService } from 'src/app/ans/shared2/answer.service'

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  list: Answer[];
  constructor(private service: AnswerService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Answer;
      })
    });
  }

  onEdit(emp: Answer) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('Answers/' + id).delete();
      this.toastr.warning('Deleted successfully','Data');
    }
  }

}
