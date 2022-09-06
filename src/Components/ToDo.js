import React, {useState} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: black;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
`

const Book = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`

const Title = styled.h1`
    color: orange;
    margin-bottom: 30px;
`

const Form = styled.form`
    width: 500px;
    display: flex;
    justify-content: space-evenly;
`

const Input = styled.input`
    border: 1px solid orange;
    border-radius: 5px;
`

const Button = styled.button`
    padding: 5px;
    border-radius: 5px;
    border: 1px solid orange;
`

const List = styled.ul`
    margin-top: 40px;
`

const Item = styled.li`
    list-style-type: none;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`



export default function ToDo(){

    const[input, setInput] = useState()
    const[list, setList] = useState([])

    const Add = () => {
        let digito = {
            value: input,
            id: Date.now(),
            status: false
        }
        setList([...list, digito])
        setInput("")
    }

    const Del = (Rastreador) => {
        const ListaFiltrada = list.filter(item => item.id !==  Rastreador)
        setList(ListaFiltrada)
     }

    return(
        <Book>
            <GlobalStyle />
            <Title>Desafio ToDo List</Title>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Input value={input} onChange={(e) => { setInput(e.target.value)}}/>
                <Button onClick={() => {Add()}}>Adicionar</Button>
                <Button onClick={(Clear) => {(setList([]))}}>Deletar tudo</Button>
            </Form>
            <List>
                {list.map((item) => (
                    <Item>
                        {item.value}
                        <Button onClick={() =>{Del(item.id)}}>Fechar</Button>
                    </Item>
                ))}
            </List>
        </Book>
    )
}