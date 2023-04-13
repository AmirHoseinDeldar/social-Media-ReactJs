import React from 'react';
import Navbar from './navBar';
import styles from './Chats.module.css';

const chats = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};

export default chats;
