import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyBd7mj7iVKQ6elWjDov0zAw9F1fRmMYLp0",
    authDomain: "dhshop-18f71.firebaseapp.com",
    projectId: "dhshop-18f71",
    storageBucket: "dhshop-18f71.appspot.com",
    messagingSenderId: "457970388094",
    appId: "1:457970388094:web:930fea4b7a36e671f35c2f",
    measurementId: "G-04JEDFXTZQ"
};

firebase.initializeApp(config);
  export const createUserProfileDocument=async (userAuth, additionalData)=>{
      if (!userAuth) return;

      const userRef=firestore.doc(`users/${userAuth.uid}`);

      const snapShot=await userRef.get();

      if(!snapShot.exists){
          const {displayName, email}=userAuth;
          const createdAt= new Date();
          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              });
              
          } catch (error) {
              console.log('Error creating user!', error.message);
          }
      }

      return userRef;

  };


  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;