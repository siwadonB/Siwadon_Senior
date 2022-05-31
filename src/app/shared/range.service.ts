import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Range } from './range.model';

@Injectable({
  providedIn: 'root'
})
export class RangeService {
  formData: Range;

  constructor(private firestore: AngularFirestore) { }

  getRange() {
    return this.firestore.collection('range').snapshotChanges();
  }
}
