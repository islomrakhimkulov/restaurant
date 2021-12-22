import { get } from 'core-js/core/dict';
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';

const {
    VUE_APP_FIREBASE_API_KEY,
    VUE_APP_FIREBASE_AUTH_DOMAIN,
    VUE_APP_FIREBASE_PROJECT_ID,
    VUE_APP_FIREBASE_STORAGE_BUCKET,
    VUE_APP_FIREBASE_MESSEGING_SENDER_ID,
    VUE_APP_FIREBASE_APP_ID,
    VUE_APP_FIREBASE_MEASUREMENT_ID
} = process.env;

const CONFIG = {
    appId: VUE_APP_FIREBASE_APP_ID,
    apiKey: VUE_APP_FIREBASE_API_KEY,
    projectId: VUE_APP_FIREBASE_PROJECT_ID,
    authDomain: VUE_APP_FIREBASE_AUTH_DOMAIN,
    storageBucket: VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VUE_APP_FIREBASE_MESSEGING_SENDER_ID,
    measurementId: VUE_APP_FIREBASE_MEASUREMENT_ID
}

export const firebaseApp = initializeApp(CONFIG)
export const database = getDatabase(firebaseApp)


