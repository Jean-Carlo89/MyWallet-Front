import {Container,DataInfo,Logo,
    Input,ConfirmButton,ActionsHeader} from '../StyledComponents.js'


//apagar esse link
import{Link} from 'react-router-dom'


export default function NewEntry(){

    return(
        <Container justify={'flex-start'}>
            <ActionsHeader>Nova entrada</ActionsHeader>
            <Input placeholder="Valor"/>
            <Input placeholder="Descrição"/>
            <ConfirmButton>Salvar entrada</ConfirmButton>

        <Link to="/sign-up">sign up</Link>
        <Link to="/">login</Link>
        
        <Link to="/newWithdraw">saída</Link>
        </Container>
    )
}

