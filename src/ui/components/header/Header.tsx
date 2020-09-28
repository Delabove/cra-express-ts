import React from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return(
  // <div className={styles.Main_Nav}>
    <ul className={styles.Main_Nav_List}>
      <div className={styles.Main_Nav_Logo}>
        {/* <li className={styles.main_nav_item}>Logo</li> */}
      </div>
      <div className={styles.Main_Nav_UserLinks}>
       <Link className={styles.main_nav_item} to="#">Login</Link>
       <Link className={styles.main_nav_item} to="#">Signup</Link>
      </div>
    </ul>

  // </div>
  )
}

export default Header