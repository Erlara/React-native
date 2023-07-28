// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { enableLogging } from "firebase/database";

enableLogging(true);

const firebaseConfig = {
  apiKey: "AIzaSyAbiVxAl2CvEvOnp8-VScHgJDI6vxo7xy4",
  authDomain: "myproject-c7155.firebaseapp.com",
  projectId: "myproject-c7155",
  storageBucket: "myproject-c7155.appspot.com",
  messagingSenderId: "781923500924",
  appId: "1:781923500924:web:e4dadaff19f6550914daf9",
  measurementId: "G-C09TVFVE4W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
