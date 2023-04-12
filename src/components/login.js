import React from 'react';
import Google from '../google.svg';
import styles from './Login.module.css';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Khosh Omadi Refigh </h2>
        <div
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
          className={styles.button}
        >
          <img src={Google} alt='google' /> sign in with google
        </div>
      </div>
    </div>
  );
};

export default Login;
