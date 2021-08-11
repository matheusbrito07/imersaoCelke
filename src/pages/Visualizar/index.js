import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import Menu from "../../components/menu"
import { ButtonInfo, Hr, ButtonWarning, Container, ConteudoTitulo, Titulo, ConteudoView } from "../../styles/customStyle"

export default function Visualizar (props){

    const[id] = useState(props.match.params.id)
    const[data, setData] = useState("")


    useEffect(() => {
        const getProduto = async =>{
            setData({
                id:1,
                nome:"mouse",
                valor:50,
                quantidade:40,
            })
        }
        getProduto();
    },[id])

    return(
        <Container>
            <Menu />
        <ConteudoTitulo>
            <Titulo>Visualizar</Titulo>
                <Link to="/listar"><ButtonInfo type="button">Listar</ButtonInfo></Link>{" "}
                <Link to={"/editar" + data.id}><ButtonWarning type="button">Editar</ButtonWarning></Link>{" "}

        </ConteudoTitulo>
        <Hr />
            
                <ConteudoView>ID: {data.id}</ConteudoView>
                <ConteudoView>Nome: {data.nome}</ConteudoView>
                <ConteudoView>Valor: {data.valor}</ConteudoView>
                <ConteudoView>Quantidade: {data.quantidade}</ConteudoView>
        </Container>
    )
}