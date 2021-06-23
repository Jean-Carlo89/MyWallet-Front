import {UseHistory,Link, useHistory} from 'react-router-dom'
import {Container} from './StyledComponents'
import styled from 'styled-components'
import{HiOutlineLogout} from 'react-icons/hi'
import NoRegister from './NoRegister.js'
import {CgAdd,CgRemove} from 'react-icons/cg'
import { useState,useEffect} from 'react'
import Loader from "react-loader-spinner";
import axios from 'axios'


export default function Home(){
    const history = useHistory()
    const [transactions,setTransactions] = useState([])
    const [loading,setLoading] = useState(true)
    const config = {}
    
    useEffect(()=>{
        axios.get("http://localhost:4000/home",config)
        .then((response)=>{
            console.log(response)
            setTransactions([...response.data])
            setTimeout(()=>{
                setLoading(false)
            },800)
            
        })
        .catch((responseError)=>{
            console.log(responseError)
        })
    },[])
   
    
    return(

       <Container>
        
        {loading 
            ? <Loader type="Circles" className='loader' color="#FFF"  timeout={3000} />
            :
     <>   
        <Header>
            <h1>Olá, nome da pessoa</h1>
            <span><HiOutlineLogout/></span>
        </Header>

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

                            <h3 style={item.type==="deposit" ?  {color:'green'} : {color:'red'}}>{(item.price/100).toFixed(2)}</h3>
                            </Register>
                        )
             }) }
             
             {/* <Register>
                 <div>
                    <p>date</p>
                    <h3>alomoço</h3>
                 </div>

                 <h3>price</h3>

             </Register>

             <Register>
                 <div>
                    <p>date</p>
                    <h3>alomoço</h3>
                 </div>

                 <h3>price</h3>

             </Register> */}
             {/*<NoRegister/> */}
        </MainContent>

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
 margin-bottom: 13px;

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
            }


    }
`

