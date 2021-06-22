import {Container,DataInfo,Logo,
    Input,ConfirmButton,MessageH3} from './StyledComponents.js'
    import{Link} from 'react-router-dom'
export default function SignUp(){

    return(
        <Container>
            <DataInfo>
                    <Logo>MyWallet</Logo>
                    <Input placeholder="Nome"/>
                    <Input placeholder="E-mail"/>
                    <Input placeholder="Senha"/>
                    <Input placeholder="Confirme a senha"/>
                    <ConfirmButton>Entrar</ConfirmButton>
                    <MessageH3>Primeira vez? Cadastre-se</MessageH3>
            </DataInfo> 

            <Link to="/">login</Link>
        </Container>
    )

}


