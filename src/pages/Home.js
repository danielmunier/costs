import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Gerencie seus projetos agora!</p>
            <a href="/">Criar projeto</a>
            <img src="https://picsum.photos/400" alt="costs"></img>
        </section>
    )
}


export default Home