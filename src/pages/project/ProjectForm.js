import styles from './ProjectForm.module.css'
import Input from '../../components/form/Input'
import Select from '../../components/form/Select'
import SubmitButton from '../../components/form/SubmitButton'


function ProjectForm({btnText}) {
    return (
        <form>
        <Input type="text" text="Nome do Projeto" name="Insira o nome do Projeto" placeholder="Nome"></Input>
        <Input type="text" text="Descrição do Projeto" name="Insira a descrição do Projeto"></Input>
        <Input type="number" text="Custo do Projeto" name="Insira o custo do Projeto"></Input>
        <Select name="category_id" text="Selecione a categoria"/>
        <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm 