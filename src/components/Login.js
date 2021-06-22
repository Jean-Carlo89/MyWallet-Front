
import {Container,DataInfo,Logo,
    Input,ConfirmButton,MessageH3} from './StyledComponents.js'

    import{Link} from 'react-router-dom'
export default function Login(){

    return(
    
        <Container>
            <DataInfo>
                    <Logo>MyWallet</Logo>
                    <Input placeholder="E-mail"/>
                    <Input placeholder="Senha"/>
                    <ConfirmButton>Entrar</ConfirmButton>
                    <MessageH3>Primeira vez? Cadastre-se</MessageH3>
            </DataInfo> 
           
            <Link to="/sign-up">sign up</Link>
        </Container>

        
    )

}


