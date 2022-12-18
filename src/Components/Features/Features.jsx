import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={`${styles['section__features']}`}>
      <div className={`${styles['section__features__heading']}`}>
        <h1>Features</h1>
      </div>
      <article className={`${styles['section__features__items']}`}>
        <div className={`${styles['section__feature']} ${styles['section__features__item1']}`}>
          <div className={`${styles['feature']} ${styles['feature__1']}`}>
            <img src={require('../../assets/community.png')} alt='community-img' />
            <p>Join communities of your choice and develop yourself and also help others grow </p>
          </div>
          <img
            className={`${styles['features__img']} ${styles['features__img1']}`}
            src={require('../../assets/features-img1.jpg')}
            alt=''
          />
        </div>
        <div className={`${styles['section__feature']} ${styles['section__features__item2']}`}>
          <img
            className={`${styles['features__img']} ${styles['features__img2']}`}
            src={require('../../assets/features-img2.jpg')}
            alt=''
          />
          <div className={`${styles['feature']} ${styles['feature__2']}`}>
            <p>Meet like minded folks and expand your views, discuss your ideas, take your ideas to next level</p>
            <img src={require('../../assets/connect.png')} alt='community-img' />
          </div>
        </div>
        <div className={`${styles['section__feature']} ${styles['section__features__item3']}`}>
          <div className={`${styles['feature']} ${styles['feature__3']}`}>
            <img src={require('../../assets/job-community.png')} alt='community-img' />
            <p>Have an idea? Make your create your own community and drive forward that community</p>
          </div>
          <img
            className={`${styles['features__img']} ${styles['features__img3']}`}
            src={require('../../assets/features-img3.jpg')}
            alt=''
          />
        </div>
      </article>
    </section>
  );
};

export default Features;
