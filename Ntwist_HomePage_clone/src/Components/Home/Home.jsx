import React from 'react';
import styles from "./Home.module.css";

const Home = ({
  homeTitleOne, 
  homeTitleTwo, 
  homeLink     
}) => {
  return (
    <div className={styles.homePage}>
      <div className={styles.leftContent}>
        <h1 className={styles.homeTitle}>
          <span>{homeTitleOne}</span><br />
          <span>{homeTitleTwo}</span>
        </h1>
        <a href="#" className={styles.homeLink}>{homeLink}</a>
      </div>
      <div className={styles.rightContent}>
        <img src={'https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png'} alt="home Image" className={styles.homeImage} />
      </div>
    </div>
  )
}

export default Home;
