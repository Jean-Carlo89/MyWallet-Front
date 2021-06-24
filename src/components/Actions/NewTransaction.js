import {Container,Input,ConfirmButton,ActionsHeader,Return} from '../StyledComponents.js'

import{GiReturnArrow} from 'react-icons/gi'
import {useHistory,useParams} from 'react-router-dom'
import axios from 'axios'
import {useContext, useState} from 'react'
//apagar esse link
import{Link} from 'react-router-dom'
import Usercontext from '../UserContext.js'


export default function NewTransaction(){
    const {type} = useParams()
    const{user} = useContext(Usercontext)
    
    
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

        </Container>
    )

    function saveAction(){

        const config = {
            headers:{
                'Authorization' : `Bearer ${user.token}`
            }
        }
        
        const body = {...entryData,transactionType:type}

      //  console.log(body["value"])

        if(!body["value"] || !body["description"]){
            alert('Os campos não podem estar vazios')
            return
        }

        if(body.value === '' || body.description===''){
            alert('Os campos não podem estar vazios')
            return
        }

        axios.post('http://localhost:4000/entry',body,config)
        .then((response)=>{
            //console.log(response)
            
            const resetData = {
                value:"",
                description:""
            }

            setEntryData({...resetData})

            // entryData["value"]=""
            // entryData["description"]=""


        })
        .catch((responseError)=>{
           // console.log(responseError)
            alert('Houve um erro.Por favor recarregue a página')
        })

    }


}

