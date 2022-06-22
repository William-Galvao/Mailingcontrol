import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwl1uDXkNxBs0HT7kpv9VKjrkUIMeZwVo",
  authDomain: "mailing-control.firebaseapp.com",
  projectId: "mailing-control",
  storageBucket: "mailing-control.appspot.com",
  messagingSenderId: "782419122551",
  appId: "1:782419122551:web:bee36b1c38be927a3d6972",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, logInWithEmailAndPassword, sendPasswordReset, logout };
