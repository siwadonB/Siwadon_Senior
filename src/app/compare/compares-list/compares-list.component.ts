import { Component, OnInit } from '@angular/core';
import { Range } from 'src/app/shared/range.model';
import { RangeService } from 'src/app/shared/range.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-compares-list',
  templateUrl: './compares-list.component.html',
  styleUrls: ['./compares-list.component.css']
})
export class ComparesListComponent implements OnInit {

  list: Range[];
  constructor(private service: RangeService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getRange().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Range;
      })
    });
  }

  onEdit(range: Range) {
    this.service.formData = Object.assign({}, range);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('range/' + id).delete();
      this.toastr.warning('Deleted successfully','Data');
    }
  }

}