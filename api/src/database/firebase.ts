import { App, initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { apiKey, appId, authDomain, messagingSenderId, projectId, storageBucket } from '../config';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

initializeApp(firebaseConfig);

export const db = getFirestore()