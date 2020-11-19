import firebaseAuth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export class FirebaseHelper {
  static login(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    return firebaseAuth().signInWithEmailAndPassword(email, password);
  }

  static register(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    return firebaseAuth().createUserWithEmailAndPassword(email, password);
  }
}
