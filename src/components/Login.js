
import {Container,DataInfo,Logo,
    Input,ConfirmButton,MessageH3} from './StyledComponents.js'

import{Link,useHistory} from 'react-router-dom'
import {useContext, useState} from 'react'
import axios from 'axios'
import Usercontext from './UserContext.js'

export default function Login(){
    const history = useHistory()
    const [loginData,setLoginData] = useState({})
    const {user,setUser} = useContext(Usercontext)
    function SaveInfo(e,key){
        loginData[key]=e.target.value
        setLoginData({...loginData})
    }

    
    return(
    
        <Container>
            <DataInfo>
                    <Logo>MyWallet</Logo>
                    <Input placeholder="E-mail" type='text'
                            onChange={(e)=>SaveInfo(e,'email')}
                            //disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={loginData.email || ''}
                    />
                    
                    <Input placeholder="Senha" type='password'
                            onChange={(e)=>SaveInfo(e,'password')}
                            //disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={loginData.password || ''}
                    />
                    
                    
                    <ConfirmButton onClick={login}>Entrar</ConfirmButton>
                    <MessageH3>Primeira vez? Cadastre-se</MessageH3>
            </DataInfo> 
           
            <Link to="/sign-up">sign up</Link>
            <Link to="/home">home</Link>
            <Link to="/newEntry">entrada</Link>
            <Link to="/newWithdraw">saída</Link>
            
            <button onClick={()=>console.log(loginData)}>loginData</button>
        </Container>

        
    )

    function login(){
        //alert('Tentei logar')
        const body = {...loginData}
        axios.post("http://localhost:4000/sign-in",body)
        .then((response)=>{
            console.log(response)
            setUser(response.data)


           history.push("/home")
        })
        .catch((e)=>{
            console.log(e)
        })
    }

}


