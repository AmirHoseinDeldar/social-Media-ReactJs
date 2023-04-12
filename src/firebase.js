import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAXjwN7zxPIcbSrgKPTlMlPPEEBiV8LpFc',
    authDomain: 'socialmediareact-c740b.firebaseapp.com',
    projectId: 'socialmediareact-c740b',
    storageBucket: 'socialmediareact-c740b.appspot.com',
    messagingSenderId: '152294985751',
    appId: '1:152294985751:web:3d05b91939290f1f970c52',
  })
  .auth();
