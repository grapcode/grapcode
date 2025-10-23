// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA31-6wM2KD0iOaQZa8ZAoOTTsOrAPMTvA',
  authDomain: 'grapcode-it.firebaseapp.com',
  projectId: 'grapcode-it',
  storageBucket: 'grapcode-it.firebasestorage.app',
  messagingSenderId: '737826202955',
  appId: '1:737826202955:web:4a546f04b78584349ff4ce',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
