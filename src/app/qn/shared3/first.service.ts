import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { qn } from './first.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: qn;

  constructor(private firestore: AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('qns').snapshotChanges();
  }
}
