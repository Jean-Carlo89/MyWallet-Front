import styled from 'styled-components'
export default function NoRegister(){

    return(
        <EmptyRegister>
            Não há registros de entrada ou saída
        </EmptyRegister>
    )
}


const EmptyRegister=styled.p`
width: 180px;
height: 46px;
display: flex;
justify-content: center;
align-items: center;
`