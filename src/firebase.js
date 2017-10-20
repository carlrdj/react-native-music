import * as firebase from 'firebase'


const config = {
    apiKey: "AIzaSyC-rV9Eq3t3o97JVcDDisU34xDegJRoiZ0",
    authDomain: "instagram-b62f8.firebaseapp.com",
    databaseURL: "https://instagram-b62f8.firebaseio.com",
    projectId: "instagram-b62f8",
    storageBucket: "instagram-b62f8.appspot.com",
    messagingSenderId: "1001966076341"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase