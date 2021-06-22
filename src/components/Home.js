import {Link} from 'react-router-dom'
import {Container} from './StyledComponents'
import styled from 'styled-components'
import{HiOutlineLogout} from 'react-icons/hi'
import NoRegister from './NoRegister.js'
export default function Home(){
    return(
       

       <Container>
            
        <Header>
            <h1>Olá, nome da pessoa</h1>
            <span><HiOutlineLogout/></span>
        </Header>

        <MainContent>
            <NoRegister/>
        </MainContent>

        <ButtonsContainer>
            <AddSubtractButton>

            </AddSubtractButton>

            <AddSubtractButton>
                
            </AddSubtractButton>
        </ButtonsContainer>

        <Link to="/sign-up">sign up</Link>
        <Link to="/home">home</Link>
        </Container>
    
    )
}

const Header=styled.div`
width: 326px;
border:1px solid red;
display: flex;
justify-content: space-between;
margin-bottom: 15px;

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
 justify-content: center;
 align-items: center;
 background-color: white;

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
`

