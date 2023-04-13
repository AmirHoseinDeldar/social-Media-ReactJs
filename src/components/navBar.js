import React from 'react';
import styles from './Navbar.module.css';
const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>AmirGram</div>
      <div className={styles.logout}>LogOut</div>
    </div>
  );
};

export default navbar;
