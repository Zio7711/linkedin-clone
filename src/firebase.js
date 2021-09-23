import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAN2Th3mGxt6AmRBuXlYy6InXZnP4IMOLY',
  authDomain: 'linkedin-clone-2ea4d.firebaseapp.com',
  projectId: 'linkedin-clone-2ea4d',
  storageBucket: 'linkedin-clone-2ea4d.appspot.com',
  messagingSenderId: '603799624387',
  appId: '1:603799624387:web:b93dbbc5dac57be3406076',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
