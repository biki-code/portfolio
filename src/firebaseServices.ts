import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP-zv_B_a3wENfKpqXB4j3_8RghjJUz90",
  authDomain: "biki-portfolio.firebaseapp.com",
  projectId: "biki-portfolio",
  storageBucket: "biki-portfolio.appspot.com",
  messagingSenderId: "299303038797",
  appId: "1:299303038797:web:fdf9b9215a460331e6d104",
  measurementId: "G-W5CNNV8KQD",
};

let firebaseInstance: FirebaseApp;

const InitializeApp = () => {
  if (!firebaseInstance) initializeApp(firebaseConfig);

  return firebaseInstance;
};

const GetAnalyticsInstance = () => {
  const appInstance = InitializeApp();
  return getAnalytics(appInstance);
};

const GetFirestoreInstance = () => {
  const appInstance = InitializeApp();
  return getFirestore(appInstance);
};

const FirebaseServices = {
  getAnalytics: GetAnalyticsInstance,
  getFirestore: GetFirestoreInstance,
};

export default FirebaseServices;
