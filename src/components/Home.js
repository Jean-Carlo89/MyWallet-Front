import {UseHistory,Link, useHistory} from 'react-router-dom'
import {Container} from './StyledComponents'
import styled from 'styled-components'
import{HiOutlineLogout} from 'react-icons/hi'
import NoRegister from './NoRegister.js'
import {CgAdd,CgRemove} from 'react-icons/cg'
import { useState,useEffect, useContext} from 'react'
import Loader from "react-loader-spinner";
import axios from 'axios'
import Usercontext from './UserContext.js'



export default function Home(){
    const history = useHistory()
    const [transactions,setTransactions] = useState([])
    const [loading,setLoading] = useState(true)
    const [total,setTotal] = useState('')
    const {user,setUser} = useContext(Usercontext)
    console.log(user)

    const config = {
        headers:{
            'Authorization' : `Bearer ${user.token}`
        }
    }
    
    
    useEffect(()=>{
        axios.get("http://localhost:4000/home",config)
        .then((response)=>{
            console.log(response)
            setTransactions([...response.data])
            console.log(transactions.data)
        
            setLoading(false)
           
            
        })
        .catch((responseError)=>{
            console.log(responseError)
        })
        let sum = 0
        
        transactions.forEach((item)=>{
        
            if(item.type==='deposit'){
                sum += item.value
            }else{
                sum -= item.value
            }
        
        })

        setTotal(sum)
        
    },[])
   
    
    return(

       <Container>
        
        {loading 
            ? <Loader type="Circles" className='loader' color="#FFF"  timeout={3000} />
            :
     <>   
        <Header>
            <h1>Olá,{user.user}</h1>
            <span><HiOutlineLogout/></span>
        </Header>
            <Relative>
                <MainContent register={transactions.length}>
                    { transactions.length===0 
                        ?   <NoRegister/>
                        :   transactions.map((item)=>{
                                return(
                                    <Register>
                                        <div>
                                            <p>{item.date}</p>
                                            <h3>{item.description}</h3>
                                        </div>

                                    <h3 style={item.type==="deposit" ?  {color:'green'} : {color:'red'}}>{(item.value/100).toFixed(2)}</h3>
                                    </Register>
                                )
                    }) }
                    
                   
                </MainContent>
                <Total sum={total>=0?'green':'red'}><p>Saldo</p> <span > {(total/100).toFixed(2)} </span></Total>
            </Relative>
               
            

        <ButtonsContainer>
            <AddSubtractButton onClick={()=>history.push("/newTransaction/deposit")}>
                <CgAdd/>
                <p>Nova entrada</p>
            </AddSubtractButton>

            <AddSubtractButton onClick={()=>history.push("/newTransaction/withdraw")}>
                <CgRemove/>
                <p>Nova saída</p>
            </AddSubtractButton>
        </ButtonsContainer>

        <Link to="/sign-up">sign up</Link>
        <Link to="/">login</Link>
        <Link to="/newTransaction">entrada</Link>
        <Link to="/newWithdraw">saída</Link>
        <button onClick={()=>console.log(transactions)}>aaa</button>
</>
}
        </Container>
    
    )
}

const Header=styled.div`
width: 326px;
border:1px solid red;
display: flex;
justify-content: space-between;
margin-bottom: 15px;
margin-top: 10px;

    h1{
        font-size: 26px;
        color:white;
    }
    span{
        color: white;
        font-size: 26px;
    }
`

const MainContent = styled.ul`
 width: 326px;
 height: 446px;
 border: 1px solid yellow;
 display: flex;
 flex-direction: column;
 justify-content: ${props=>props.register ? 'flex-start' : 'center'};
 align-items: center;
 background-color: white;
 border-radius: 5px;
 overflow-y: scroll;
 margin-bottom: 13px;
 //position: relative;
`

const Relative = styled.div`
position: relative;
height: auto;
border-radius: 5px;
`



 const Total = styled.div`
width: 100%;
height: 20px;
position: absolute;
bottom: 0;
right: 0;
display: flex;
justify-content: space-between;
z-index:2;
background:white;
align-items: center;
border-radius: 5px;
color: ${props=>props.sum};

    p{
        color: black;
        font-size: 17px;
        margin-left: 5px;
        font-weight: bold;
    }
    span{
        
        font-size: 17px;
        margin-right: 5px;
    }


`

const ButtonsContainer=styled.div`
width: 326px;
display: flex;
justify-content: space-between;
`
const AddSubtractButton = styled.button`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 17px;
    color: white;

    p{
        width: 64px;
        height: 40px;
        border:1px solid red;
        display:flex;
        justify-content: flex-start;
    }

   svg{
        font-size: 21px;
    }
`

const Register = styled.li`
width: 95%;

border: 1px solid red;

display: flex;
justify-content: space-between;
margin-top: 10px;
font-size: 16px;

    
    div{
        display: flex;
        justify-content: space-between;
        border:1px solid blue;
        //width: 40%;
            p{
                margin-right: 10px;
                color: #C6C6C6;

            }


    }
`


