import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoi-w1JuBIi0X3W_cBg6gJHOeu3ejGwIo",
  authDomain: "my-portifolio-e7560.firebaseapp.com",
  projectId: "my-portifolio-e7560",
  storageBucket: "my-portifolio-e7560.firebasestorage.app",
  messagingSenderId: "573028500104",
  appId: "1:573028500104:web:dc9aebf30b8e8f337d553d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
