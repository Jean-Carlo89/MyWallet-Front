import {Container,Input,ConfirmButton,ActionsHeader,Return} from '../StyledComponents.js'

import{GiReturnArrow} from 'react-icons/gi'
import {useHistory,useParams} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
//apagar esse link
import{Link} from 'react-router-dom'


export default function NewTransaction(){
    const {type} = useParams()
    
    
    console.log(type)
    const [entryData,setEntryData] = useState({})
    const history = useHistory()

    function saveInfo(e,key){
        entryData[key] = e.target.value
        setEntryData({...entryData})
    }
    
    return(
        <Container justify={'flex-start'}>
            <ActionsHeader>{type==='deposit' ? 'Nova entrada' : 'Nova saída'}</ActionsHeader>
            
            <Input placeholder="Valor" type='number'
                     onChange={(e)=>saveInfo(e,'value')}
                     value={entryData.value || ''}
            />
            
            
            <Input placeholder="Descrição" type='text'
                     onChange={(e)=>saveInfo(e,'description')}
                     value={entryData.description || ''}
                     
            />
            
            <ConfirmButton onClick={saveAction}>{type==='deposit' ? 'Salvar entrada' : 'Salvar saída'}</ConfirmButton>

            <Return>
                <GiReturnArrow onClick={()=>history.push("/home")}/>
                <h2>Retornar</h2>
            </Return>

        <Link to="/sign-up">sign up</Link>
        <Link to="/">login</Link>
        
        <Link to="/newWithdraw">saída</Link>
        <button onClick={()=>console.log(entryData)}>entryData</button>
        </Container>
    )

    function saveAction(){

        
        
        const body = {...entryData,transactionType:type}

        axios.post('http://localhost:4000/entry',body)
        .then((response)=>{
            console.log(response)

        })
        .catch((responseError)=>{
            console.log(responseError)
            alert('Houve um erro.Por favor recarregue a página')
        })

    }


}

