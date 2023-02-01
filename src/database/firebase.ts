import { App, initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { GOOGLE_CREDS } from '../config';

const firebaseConfig = JSON.parse(GOOGLE_CREDS);

initializeApp({
  credential: cert(firebaseConfig)
});

export const db = getFirestore()