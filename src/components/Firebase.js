import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDtEWBHELCyBKOww5fRNdnf3PXDWye5TWs",
    authDomain: "sugar-donut.firebaseapp.com",
    databaseURL: "https://sugar-donut.firebaseio.com",
    projectId: "sugar-donut",
    storageBucket: "sugar-donut.appspot.com",
    messagingSenderId: "1024720151938"
};
firebase.initializeApp(config);
export default firebase;