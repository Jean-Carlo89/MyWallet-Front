import styled from 'styled-components'
const Container = styled.div`
    background-color: #8C11BE;
    width: 100%;
    height: 100vh;
    display: flex;
    //justify-content: center;
    justify-content: ${props=>props.justify || 'center'};
    align-items: center;
    
    
    
    flex-direction: column;


`

const DataInfo = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive!important;
    color: white;
    font-size: 32px;
    margin-bottom: 24px;

`

const Input = styled.input`
    width: 95%;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 10px;


    ::placeholder{
        font-family: 'Raleway', sans-serif;
        color:black;
        font-size: 20px;
    }
`

const ConfirmButton = styled.button`
    width: 95%;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    color:white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;

`

const MessageH3 = styled.h3`
    font-size:14px;
    color: white;
    
`

const ActionsHeader = styled.h1`
font-size:26px;
color: white;
margin-top: 25px;
margin-bottom: 40px;
border:1px solid red;
width: 326px;
`

export {Container,DataInfo,Logo,Input,MessageH3,ActionsHeader}
export{ConfirmButton}