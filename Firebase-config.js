
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCb83h4RQaBfiCGktu9aDu-OwVoGLZOoBo",
  authDomain: "lordak-62791.firebaseapp.com",
  projectId: "lordak-62791",
  storageBucket: "lordak-62791.firebasestorage.app",
  messagingSenderId: "1087195456791",
  appId: "1:1087195456791:web:ebf5e2961148b5dddf4352"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)