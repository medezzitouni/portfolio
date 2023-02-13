
export const IG_API_URL = process.env.NEXT_PUBLIC_IG_BASE_URL;
export const IG_TOKEN = process.env.IG_TOKEN || '';
export const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL || '';
export const DEBUG = process.env.NEXT_PUBLIC_DEBUG == 'true' ? true : false;
export const VERCEL_FUNCTIONS_BASE_URL = process.env.NEXT_PUBLIC_VERCEL_FUNCTIONS_BASE_URL;
export const FIREBASE_TOKEN_ID = process.env.FIREBASE_TOKEN_ID || '';
export const TOKEN_COLLECTION = process.env.TOKEN_COLLECTION || ''

// Firebase
export const apiKey= process.env.apiKey
export const authDomain= process.env.authDomain
export const projectId= process.env.projectId
export const storageBucket= process.env.storageBucket
export const messagingSenderId= process.env.messagingSenderId
export const appId= process.env.appId
export const measurementId= process.env.measurementId


// Firebase Admin
export const type = process.env.type || '';
export const project_id = process.env.project_id || '';
export const private_key_id = process.env.private_key_id || '';
export const private_key = process.env.private_key || '';
export const client_email = process.env.client_email || '';
export const client_id = process.env.client_id || '';
export const auth_uri = process.env.auth_uri || '';
export const token_uri = process.env.token_uri || '';
export const auth_provider_x509_cert_url = process.env.auth_provider_x509_cert_url || '';
export const client_x509_cert_url = process.env.client_x509_cert_url || '';
