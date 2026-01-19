import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore';

// --- KONFIGURASI FIREBASE ---
// Ganti nilai di bawah ini dengan konfigurasi dari Firebase Console Anda
// Cara mendapatkan: 
// 1. Buka console.firebase.google.com
// 2. Buat Project -> Project Settings -> General -> Your apps -> Config
const firebaseConfig = {
  apiKey: "AIzaSyAwT9rqSKm7CHlry-RUgMyQjeWtRsnt_P0",
  authDomain: "wedding-rifa-fariz.firebaseapp.com",
  projectId: "wedding-rifa-fariz",
  storageBucket: "wedding-rifa-fariz.firebasestorage.app",
  messagingSenderId: "605039664874",
  appId: "1:605039664874:web:93029cca5e8577b01ac193",
  measurementId: "G-1VXCG55LGK"
};

// Deteksi apakah user sudah mengganti config default
// Jika masih default, aplikasi akan menggunakan mode offline/lokal
const isConfigured = firebaseConfig.apiKey !== "API_KEY_ANDA_DISINI";

let db: any = null;

if (isConfigured) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase connected successfully");
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.log("Firebase not configured. Using local state mode.");
}

export { db, collection, addDoc, onSnapshot, query, orderBy, Timestamp, isConfigured };