import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCFSG7NK6PQmgL_KD8wjgJTP7ki8QJh8VM',
  authDomain: 'twitter-clone-is.firebaseapp.com',
  projectId: 'twitter-clone-is',
  storageBucket: 'twitter-clone-is.appspot.com',
  messagingSenderId: '721415145874',
  appId: '1:721415145874:web:0450c0ff498889dc13194b',
  measurementId: 'G-LTVRVYDZMJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export default db
