import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import Menu from "../../components/menu"
import { Form, Hr, Label, ButtonInfo, Container, ConteudoTitulo, Titulo, Input, ButtonPrimary, ButtonWarning } from "../../styles/customStyle"


export default function Editar (props){

    const [id] = useState(props.match.params.id)
    const [nome, setNome] = useState(" ")
    const [valor, setValor] = useState (" ")
    const [quantidade, setQuantidade] = useState (" ")
    const editProduto = async e => {
        //console.log("Nome:" +nome)
        e.preventDefault()
        alert("Nome:" +nome)
    }

    useEffect(() => {
        const getProduto = async =>{
            setNome("Mouse")
            setValor(50)
            setQuantidade(40)
           
        }
        getProduto();
    },[id])

    return(
    
    <Container>
        <Menu />
            <ConteudoTitulo>
                <Titulo>Editar</Titulo>
                    <Link to="/listar"><ButtonInfo type="button">Listar</ButtonInfo></Link>{" "}
                    <Link to={"/visualizar" + id}><ButtonPrimary type="button">Visualizar</ButtonPrimary></Link>{" "}

                </ConteudoTitulo>
            <Hr />
            

            <Form onSubmit={editProduto}>
                <Label htmlFor="nome">Nome:</Label>
                <Input  type="text" name="nome" placeholder="Nome do Produto" value={nome}
                onChange={e => setNome(e.target.value)}/>

                <Label htmlFor="valor">Valor:</Label>
                <Input type="text" name="valor" placeholder="Valor do Produto" value={valor}
                onChange={e => setValor(e.target.value)}/>
                <Label htmlFor="quantidade">Quantidade:</Label>
                <Input type="number" name="quantidade" placeholder="Quantidade do Produto" value={quantidade}
                onChange={e => setQuantidade(e.target.value)}/>

               <ButtonWarning type="submit">Salvar</ButtonWarning>
            </Form>
        </Container>
    )
}