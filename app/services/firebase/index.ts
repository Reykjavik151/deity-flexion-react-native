import firebaseAuth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import _ from 'lodash';

import { IWithID, Status } from '../../utils/types';

export class FirebaseHelper {
  static login(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    return firebaseAuth().signInWithEmailAndPassword(email, password);
  }

  static register(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    return firebaseAuth().createUserWithEmailAndPassword(email, password);
  }

  static async getCollectionWithDocId(ownerUid: string, collectionName: string): Promise<any[]> {
    const collectionRef: FirebaseFirestoreTypes.CollectionReference = firestore().collection(
      collectionName,
    );

    const snapshots: FirebaseFirestoreTypes.QuerySnapshot = await collectionRef
      .where('ownerUid', '==', ownerUid)
      .orderBy('createdAt')
      .get();

    const resultArray: any[] = [];

    _.forEach(snapshots.docs, (doc) => {
      const docData: FirebaseFirestoreTypes.DocumentData = doc.data();
      const pushData = {
        id: doc.id,
        ...docData,
      };

      if (docData.status) {
        switch (docData.status) {
          default:
          case Status.NONE.toString().toLowerCase():
            return Status.NONE;
          case Status.COMPLETED.toString().toLowerCase():
            return Status.COMPLETED;
        }
      }

      resultArray.push(pushData);
    });

    return resultArray;
  }

  static async addDocInCollection<T extends IWithID>(collectionName: string, item: T): Promise<T> {
    const collectionRef: FirebaseFirestoreTypes.CollectionReference = firestore().collection(
      collectionName,
    );

    const docRef: FirebaseFirestoreTypes.DocumentReference = await collectionRef.add(item);

    return {
      ...item,
      id: docRef.id,
    };
  }
}
