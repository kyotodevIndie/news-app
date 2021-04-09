import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDekEtBjUVRTatKnt7DllBKKz2MKMz73k8",
    authDomain: "newsapp-e2b49.firebaseapp.com",
    projectId: "newsapp-e2b49",
    storageBucket: "newsapp-e2b49.appspot.com",
    messagingSenderId: "469535073992",
    appId: "1:469535073992:web:c1dd4161db3ceff10967fd"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;