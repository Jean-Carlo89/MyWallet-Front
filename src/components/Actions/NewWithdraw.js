import {Container,DataInfo,Logo,
    Input,ConfirmButton,ActionsHeader} from '../StyledComponents.js'


    //apagar esse link
import{Link} from 'react-router-dom'
export default function NewWithdraw(){

    return(
        <Container justify={'flex-start'}>
            <ActionsHeader>Nova Saída</ActionsHeader>
            <Input placeholder="Valor"/>
            <Input placeholder="Descrição"/>
            <ConfirmButton>Salvar saída</ConfirmButton>

        <Link to="/sign-up">sign up</Link>
        <Link to="/">login</Link>
        <Link to="/newEntry">entrada</Link>
       
        </Container>
    )
}



