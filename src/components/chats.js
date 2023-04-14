import React from 'react';
import { auth } from '../firebase';
import Navbar from './navBar';
import { ChatEngine } from 'react-chat-engine';
import styles from './Chats.module.css';
import { useNavigate } from 'react-router-dom';
const Chats = () => {
  const navigate = useNavigate();
  const logouthandler = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <Navbar logouthandler={logouthandler} />
      <ChatEngine
        height='calc(100vh-50px)'
        projectID='d3b4a295-e0aa-4cde-bbb5-ad24d877e32a'
        userName='AmirHoseinDB'
        userSecret='Amir1313'
      />
    </div>
  );
};

export default Chats;
