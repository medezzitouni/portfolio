import { DocumentReference } from 'firebase-admin/firestore';
import { FIREBASE_TOKEN_ID, TOKEN_COLLECTION } from '~lib/constants';
import db from './setup';

export const getToken = async () => { 
    const ref: DocumentReference = db.collection(TOKEN_COLLECTION).doc(FIREBASE_TOKEN_ID)
    return await ref.get();
}