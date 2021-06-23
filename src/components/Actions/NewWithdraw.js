import {Container,DataInfo,Logo,
    Input,ConfirmButton,ActionsHeader,Return} from '../StyledComponents.js'
import{GiReturnArrow} from 'react-icons/gi'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
    //apagar esse link
import{Link} from 'react-router-dom'
export default function NewWithdraw(){
const history = useHistory()
    return(
        <Container justify={'flex-start'}>
            <ActionsHeader>Nova Saída</ActionsHeader>
            <Input placeholder="Valor"/>
            <Input placeholder="Descrição"/>
            <ConfirmButton>Salvar saída</ConfirmButton>

            <Return>
                <GiReturnArrow onClick={()=>history.push("/home")}/>
                <h2>Retornar</h2>
            </Return>
            
            

        <Link to="/sign-up">sign up</Link>
        <Link to="/">login</Link>
        <Link to="/newEntry">entrada</Link>
       
        </Container>
    )
}



