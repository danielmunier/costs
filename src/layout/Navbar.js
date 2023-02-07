import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from './Container'

function Navbar() {
    return (

            <nav className={styles.navbar}>
                <Container>
                <h1><Link  className={styles.item_list}  to="/">Home</Link></h1>
                    <ul className={styles.nav_list}>
                        <li><Link  className={styles.item_list}  to="/">Home</Link></li>
                        <li><Link  className={styles.item_list} to="/contact">Contato</Link></li>
                        <li><Link  className={styles.item_list} to="/company">Compania</Link></li>
                    </ul>

                </Container>
            </nav>
        
    )
}

export default Navbar