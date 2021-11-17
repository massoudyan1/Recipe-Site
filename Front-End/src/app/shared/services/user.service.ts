import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private afs: AngularFirestore) {}

  getSingleUserDisplayName = (resId: string): Observable<any> =>
    this.afs.doc(`user/${resId}`).valueChanges({ idField: 'displayName' });
}
