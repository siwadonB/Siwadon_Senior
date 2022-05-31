import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/member.model';
import { MemberService } from 'src/app/shared/member.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-manages-list',
  templateUrl: './manages-list.component.html',
  styleUrls: ['./manages-list.component.css']
})
export class ManagesListComponent implements OnInit {

  list: Member[];
  constructor(private service: MemberService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getMember().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Member;
      })
    });
  }

  onEdit(members: Member) {
    this.service.formData = Object.assign({}, members);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('members/' + id).delete();
      this.toastr.warning('Deleted successfully','Data');
    }
  }

}
