import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({to, text}) { // to ( Para onde vai o link que o usuário vai clicar )
    return (
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
    )
}

export default LinkButton