import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'


function Footer() {
    return (
        <footer className={styles.footer}>
          <ul className={styles.social_list}>
            <li className={styles.facebook}>
              <FaFacebook/>
            </li>
            <li className={styles.instagram}>
              <FaInstagram/>
            </li>
            <li className={styles.linkedin}>
              <FaLinkedin/>
            </li>
          </ul>
         
      </footer>
    )
}

export default Footer