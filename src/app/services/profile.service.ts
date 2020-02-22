import { Injectable } from '@angular/core';
import { Profile } from '../modeles/profile';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profiles: Profile[] = [];
  public profilelSubject = new Subject<Profile[]>();

  constructor() {
    this.getProfiles();
  }

  emettreProfiles() {
    this.profilelSubject.next(this.profiles);
  }

  saveProfile() {
    firebase.database().ref('/profiles').set(this.profiles)
  }

  createNewProfile(profile: Profile) {
    this.profiles.push(profile);
    this.saveProfile();
    this.emettreProfiles();
  }
  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('photo/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error.message);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }

  getProfiles() {
    firebase.database().ref('/profiles').on(
      'value',
      (data: firebase.database.DataSnapshot) => {
        this.profiles = data.val() ? data.val() : [];
        this.emettreProfiles();
      }
    );
  }
}
  
