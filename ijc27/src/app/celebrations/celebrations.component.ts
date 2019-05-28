import { Component, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'
import {Observable} from "rxjs";
//import 'rxjs/add/operator/map'

interface Note {
  content: string;
  hearts: number;
  id?: string;
}

@Component({
  selector: 'app-celebrations',
  templateUrl: './celebrations.component.html',
  styleUrls: ['./celebrations.component.css']
})
export class CelebrationsComponent implements OnInit {

  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;
  snapshot: any;

  noteDoc: AngularFirestoreDocument<Note>;
  note: Observable<Note>;

  newContent: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.notesCollection = this.afs.collection('notes')
      //, ref => {
      //return ref.orderBy('content', 'desc').limit(2)
      //ref.where('hearts','==', 4)
    //});

    this.notes = this.notesCollection.valueChanges();
   // console.log('thisNotes=' + this.notes.forEach(value => console.log("NOtes=" + value)));
    // this.snapshot = this.notesCollection.snapshotChanges().forEach( arr =>{
    //   console.log(arr);
    //   arr.map(snap => snap.payload.doc.data())
    //   }
    // );
    // this.noteDoc = this.afs.doc('notes/HEFkuJ5BqRbe8wKY8Btf');
    // this.note = this.noteDoc.valueChanges();
    // //console.log('thisNote=' + this.note.forEach(value => console.log("Value= + " + value)))
  }

  updateContent(){
    this.noteDoc.update({content: this.newContent} )
}
}
