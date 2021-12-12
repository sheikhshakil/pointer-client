import { initializeApp } from "firebase/app";

const initFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAiEVMZzmwjK8y6Duw6imO6ktpj4L9_NCA",
    authDomain: "pointer-tc.firebaseapp.com",
    projectId: "pointer-tc",
    storageBucket: "pointer-tc.appspot.com",
    messagingSenderId: "966848753855",
    appId: "1:966848753855:web:42b70ee18c6ac377d8160a",
    measurementId: "G-YPL7X35QF3",
  };

  initializeApp(firebaseConfig);
};

export default initFirebaseApp;
