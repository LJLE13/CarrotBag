import firebase from 'firebase'
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

let missingVars = []
let firebaseApp = null

Object.keys(config).forEach((key) => {
  let val = config[key]
  if (val === undefined) {
    console.log(`MISSING ENV VAR: ${key}`)
    missingVars.push(key)
  }
})

if (missingVars.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  console.log(`Did not connect to Firebase because there are missing firebase environment variables:`)
  console.log(missingVars)
}

export default firebaseApp
