// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase-admin/app';
import { credential } from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'
import { 
    // firebase credentials
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
    // admin firebase serviceKey
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url
} from '~lib/constants';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optiona

// Initialize Firebase Admin
initializeApp({
    credential: credential.cert({
        // @ts-ignore
        type: type,
        projectId: project_id,
        privateKeyId: private_key_id,
        privateKey: private_key && private_key.replace(/\\n/gm, "\n"),
        clientEmail: client_email,
        clientId: client_id,
        authUri: auth_uri,
        tokenUri: token_uri,
        authProviderX509CertUrl: auth_provider_x509_cert_url,
        clientC509CertUrl: client_x509_cert_url
    })
});

// let FirebaseAnalytics;
// if (app.name && typeof window !== 'undefined') 
//     FirebaseAnalytics = getAnalytics();
// export const analytics = FirebaseAnalytics;

export default getFirestore();