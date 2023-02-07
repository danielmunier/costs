import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Example</span></h1>
            <p>Gerencie seus projetos!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <div className={styles.img} height="400" width="400" alt="costs"></div>
        </section>
    )
}


export default Home