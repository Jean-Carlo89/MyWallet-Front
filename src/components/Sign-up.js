import {Container,DataInfo,Logo,
    Input,ConfirmButton,MessageH3} from './StyledComponents.js'
    import{Link,useHistory} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

export default function SignUp(){
    const history = useHistory()
        
    const [signUpData,setSignUpData] = useState({})
    function SaveInfo(e,key){
        signUpData[key]=e.target.value
        setSignUpData({...signUpData})
    }
    
    return(
        <Container>
            <DataInfo>
                    <Logo>MyWallet</Logo>
                    <Input placeholder="Nome" type='text' 
                            onChange={(e)=>SaveInfo(e,'name')}
                            
                            onKeyPress={(e)=>{if(e.code==="Enter"){signUp()}}}
                            value={signUpData.name || ''}
                            />
                    
                    <Input placeholder="E-mail" type='text' 
                            onChange={(e)=>SaveInfo(e,'email')}
                            
                            onKeyPress={(e)=>{if(e.code==="Enter"){signUp()}}}
                            value={signUpData.email || ''}
                    
                    />
                    
                    <Input placeholder="Senha" type='password' 
                            onChange={(e)=>SaveInfo(e,'password')}
                           
                            onKeyPress={(e)=>{if(e.code==="Enter"){signUp()}}}
                            value={signUpData.password || ''}
                    
                    />
                    
                    <Input placeholder="Confirme a senha" type='password' 
                            onChange={(e)=>SaveInfo(e,'passwordConfirmation')}
                        
                            onKeyPress={(e)=>{if(e.code==="Enter"){signUp()}}}
                            value={signUpData.passwordConfirmation || ''}
                    
                    />
                    
                    <ConfirmButton onClick={signUp}>Cadastrar</ConfirmButton>
                    <MessageH3 onClick={()=>history.push("/")}>Já tem uma conta? Entre agora!</MessageH3>
            </DataInfo> 

        </Container>
    )

    function signUp(){
        
        const body = {...signUpData}
        
        if(!body["name"] || !body["email"] || !body["password"] || !body["passwordConfirmation"]){
            alert('Os campos não podem estar vazios')
            return
        }

        if(body["name"]==="" || body["email"]==="" || body["password"]==="" || body["passwordConfirmation"]===""){
            alert('Os campos não podem estar vazios')
            return
        }

        if(body["password"] !== body["passwordConfirmation"]){
            alert('As senhas precisam ser iguais')
            return
        }

    
        delete body["passwordConfirmation"]
        
       axios.post("http://localhost:4000/sign-up",body)
       .then(()=>{
            history.push("/")
       })
       .catch(()=>{
           alert('Houve um erro ao fazer o cadastro. Por favor tente novamente')
       })
        



    }
}
            


