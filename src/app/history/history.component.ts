import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/member.model';
import { MemberService } from 'src/app/shared/member.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  
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
}