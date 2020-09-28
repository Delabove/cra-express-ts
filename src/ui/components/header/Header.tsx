import React from 'react'
import styles from './header.module.css';

const Header = () => {
  return(
  // <div className={styles.Main_Nav}>
    <ul className={styles.Main_Nav_List}>
      <div className={styles.Main_Nav_Logo}>
        <li className={styles.main_nav_item}>Logo</li>
      </div>
      <div className={styles.Main_Nav_UserLinks}>
        <li className={styles.main_nav_item}>Login</li>
        <li className={styles.main_nav_item}>Signup</li>
      </div>
    </ul>

  // </div>
  )
}

export default Header