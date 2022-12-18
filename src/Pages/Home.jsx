import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Components/Home/Navbar';
import Features from '../Components/Features/Features';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles['header__container']}`}>
        <Navbar />
        <div className={`${styles['hero__section']}`}>
          <div className={`${styles['hero__text']}`}>
            <div>Want Unity of ideas?</div>
            <p>
              Join Communities of your interest, no-more clash of ideas, communicate with people, develop yourself
              <br />
              and help others grow...
            </p>
            <div className={`${styles['btn__container']}`}>
              <button className={styles.btn} onClick={() => navigate('/signup')}>
                Signup
              </button>
              <button className={`${styles.btn} ${styles['btn__login']}`} onClick={() => navigate('/login')}>
                Login
              </button>
            </div>
          </div>
          <div className={`${styles['hero__image']}`}>
            <img src={require('../assets/hero-img.jpg')} alt='hero-img' />
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Home;
