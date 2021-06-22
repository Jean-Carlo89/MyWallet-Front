import {Container,DataInfo,Logo,
    Input,ConfirmButton,MessageH3} from './StyledComponents.js'
    import{Link} from 'react-router-dom'
import {useState} from 'react'

export default function SignUp(){
    
        
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
                            //disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={signUpData.name || ''}
                            />
                    
                    <Input placeholder="E-mail" type='text' 
                            onChange={(e)=>SaveInfo(e,'email')}
                            //disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={signUpData.email || ''}
                    
                    />
                    
                    <Input placeholder="Senha" type='password' 
                            onChange={(e)=>SaveInfo(e,'password')}
                            //disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={signUpData.password || ''}
                    
                    />
                    
                    <Input placeholder="Confirme a senha" type='password' 
                            onChange={(e)=>SaveInfo(e,'passwordConfirmation')}
                            //disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={signUpData.passwordConfirmation || ''}
                    
                    />
                    
                    <ConfirmButton onClick={login}>Entrar</ConfirmButton>
                    <MessageH3>Primeira vez? Cadastre-se</MessageH3>
            </DataInfo> 

            <Link to="/">login</Link>
            <Link to="/home">home</Link>
            <button onClick={()=>console.log(signUpData)}>loginData</button>
        </Container>
    )

    function login(){
        alert('Tentei logar')
    }
}


