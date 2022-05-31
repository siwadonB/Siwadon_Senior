import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Answer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  formData: Answer;

  constructor(private firestore: AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('Answers').snapshotChanges();
  }
}
