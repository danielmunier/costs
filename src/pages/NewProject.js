import styles from './NewProject.module.css'
import ProjectForm from './project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
)
}


export default NewProject