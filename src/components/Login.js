
import {Container,DataInfo,Logo,
    Input,ConfirmButton,MessageH3} from './StyledComponents.js'

import{useHistory} from 'react-router-dom'
import {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Usercontext from './UserContext.js'
import Loader from "react-loader-spinner";

export default function Login(){
    const history = useHistory()
    const [loginData,setLoginData] = useState({})
    const {user,setUser} = useContext(Usercontext)
    const [loading,setLoading] = useState(false)
    function SaveInfo(e,key){
        loginData[key]=e.target.value
        setLoginData({...loginData})
    }

    useEffect(()=>{
       if(localStorage.length!==0){
            const userDataString = localStorage.getItem("info")
            const userData= JSON.parse(userDataString)
            setUser(userData)
            history.push("/home")
        }
    },[])

    
    return(
    
        <Container>
            <DataInfo>
                    <Logo>MyWallet</Logo>
                    <Input placeholder="E-mail" type='text'
                            onChange={(e)=>SaveInfo(e,'email')}
                            disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={loginData.email || ''}
                    />
                    
                    <Input placeholder="Senha" type='password'
                            onChange={(e)=>SaveInfo(e,'password')}
                            disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={loginData.password || ''}
                    />
                    
                    
                    <ConfirmButton onClick={login}>
                        {loading 
                        ?  <Loader
                                type="ThreeDots"
                                color="white"
                                height={100}
                                width={100}
                                
                            />
                        :'Entrar'}
                    </ConfirmButton>
                    <MessageH3 onClick={()=>history.push("/sign-up")}>Primeira vez? Cadastre-se</MessageH3>
            </DataInfo> 
           
          
        </Container>

        
    )

    function login(){
        
        const body = {...loginData}

        if(!body["email"] || !body["password"]){
            alert('Os campos não podem estar vazios')
            return
        }

        if( body["email"]==="" || body["password"]===""){
            alert('Os campos não podem estar vazios')
            return
        }

        setLoading(true)
        
        
        axios.post("http://localhost:4000/sign-in",body)
        .then((response)=>{
            
            setUser(response.data)
            const userData =response.data
            const userDataString = JSON.stringify(userData)
            localStorage.setItem('info',userDataString)
        
          history.push("/home")
          setLoading(false)
        })
        .catch((e)=>{
            setLoading(false)
            alert('Email ou senha incorretos')
        })
    }

}


