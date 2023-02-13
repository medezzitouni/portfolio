import { DocumentReference } from 'firebase-admin/firestore';
import { FIREBASE_TOKEN_ID, TOKEN_COLLECTION } from '~lib/constants';
import db from './setup';

interface Token {
  token: string;
  expriresIn: number;
  createdAt: string;
}
export const getToken = async () => {
  const ref: DocumentReference = db
    .collection(TOKEN_COLLECTION)
    .doc(FIREBASE_TOKEN_ID);
  return await ref.get();
};

export const updateToken = async ({ token, expriresIn, createdAt}: Token) => {
  await db
    .collection(TOKEN_COLLECTION)
    .doc(FIREBASE_TOKEN_ID)
    .update({ token, expriresIn, createdAt });
};
