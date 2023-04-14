import React from 'react';
import styles from './Navbar.module.css';
const Navbar = ({ logouthandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>AmirGram</div>
      <div onClick={logouthandler} className={styles.logout}>
        LogOut
      </div>
    </div>
  );
};

export default Navbar;
