import React from 'react';
import Navbar from './Navbar';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={`${styles['header__container']}`}>
      <Navbar />
      <div className={`${styles['hero__section']}`}>
        <div className={`${styles['hero__text']}`}>
          <div>Want Unity of ideas?</div>
          <p>
            Join Communities of your interest, no-more clash of ideas, communicate with people, develop yourself <br />
            and help others grow...
          </p>
          <div className={`${styles['btn__container']}`}>
            <button className={styles.btn}>Signup</button>
            <button className={styles.btn}>Login</button>
          </div>
        </div>
        <div className={`${styles['hero__image']}`}>
          <img src={require('../../assests/hero-img.jpg')} alt='hero-img' />
        </div>
      </div>
    </div>
  );
};

export default Home;
