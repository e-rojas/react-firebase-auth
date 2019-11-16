import app from 'firebase/app'
import 'firebase/auth'

const devConfig = {
    apiKey: process.env.REACT_APP_API_DEV_KEY,
    authDomain: process.env.REACT_APP_AUTH_DEV_DOMAIN,
    databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
    projectId: process.env.REACT_APP_DEV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};
const prodConfig = {
    apiKey: process.env.REACT_APP_API_PROD_KEY,
    authDomain: process.env.REACT_APP_AUTH_PROD_DOMAIN,
    databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
    projectId: process.env.REACT_APP_PROD_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
  //firebase class
class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth();
    }
    //** Auth API **
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.doPasswordUpdate(password);
}
  
export default Firebase;