import Menu from "../../components/menu"
import { Container, ConteudoTitulo, Titulo, ButtonSuccess, Table, ButtonPrimary, ButtonWarning, ButtonDanger } from "../../styles/customStyle"

import {Link, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"

export default function Lista(){
    const { state } = useLocation()
        console.log(state)
    const [data, setData] = useState ([])
    const [status, setStatus] = useState ({
        type: state ? state.type : "" ,
        mensagem: state ? state.mensagem : "",
    })

    const listarProdutos = async => {
        var valores = [
            {"id":3, "nome":"Monitor", "valor":800, "quantidade":5},
            {"id":2, "nome":"Teclado", "valor":120.47, "quantidade":25},
            {"id":1, "nome":"Mouse", "valor":50, "quantidade":40}
        ]
        setData(valores)
    }

    useEffect(() => {
        listarProdutos();
    },[]);
     
    const apagarProduto = async (idProduto) =>{
        //console.log(idProduto)
        alert("Apagar o produto: " +idProduto)
    }
    /* nao entendi a linha 39, que faz referencia a page cadastrar que faz referencia a linha 21.49*/

    return(
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Listar</Titulo>
                    <Link to="/cadastrar"><ButtonSuccess type="button">Cadastrar</ButtonSuccess></Link>
            </ConteudoTitulo>

        {status.type === "success" ? <p style={{color:"green"}}>{status.mensagem}</p> :"" }  

        
        <hr />

        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Valores</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data.map(produto => (
                     <tr     key={produto.id}>
                            <td> {produto.id} </td>
                            <td> {produto.nome} </td>
                            <td> {produto.valores} </td>
                            <td> {produto.quantidade} </td>
                                <td> 
                                    <Link to={"/visualizar" + produto.id}><ButtonPrimary type="button">Visualizar</ButtonPrimary></Link>{" "}
                                    <Link to={"/editar" + produto.id}><ButtonWarning type="button">Editar</ButtonWarning></Link>{" "}
                                    <Link to={"#"}><ButtonDanger onClick={() => apagarProduto(produto.id)}>Apagar</ButtonDanger></Link>
                                </td>
                    </tr>

                ))}
            </tbody>
        </Table>
        </Container>
    )

}