import { useState } from "react"
import { Redirect, Link } from "react-router-dom"
import Menu from "../../components/menu"
import { Form, Hr, Label, ButtonInfo, ButtonSuccess, Container, ConteudoTitulo, Titulo, Input } from "../../styles/customStyle"


export default function Cadastrar (){

    const [produto, setProduto] = useState({
        Nome:'',
        Valor:'',
        Quantidade:'',
    });

    const [status, setStatus] = useState({
        type:"",
        mensagem:""
    })

    const handleChange = ({target}) =>{
        const {name,value} = target
        setProduto({...produto, [name]:value})
        
    }


    const valueInput = e => setProduto({...produto, [e.target.name]: e.target.value})
    const addProduto = async e =>{
        e.preventDefault()
        console.log("Nome: " + produto.nome, "Valor: " + produto.valor, "Quantidade: " + produto.quantidade )
        // setStatus({
        //     type:"error",
        //     mensagem:"erro: Produto nao cadastrado."
        // })
        // setStatus({
        //     type:"success",
        //     mensagem:"Produto cadastrado com sucesso!."
        // })
        setStatus({
            type:"redSuccess",
            mensagem:"Produto cadastrado com sucesso!."
        })
    }

    return(

        <Container>
            <Menu />
        <ConteudoTitulo>
            <Titulo>Cadastrar</Titulo>
                <Link to="/listar"><ButtonInfo type="button">Listar</ButtonInfo></Link>{" "}
            </ConteudoTitulo>
        <Hr />
        
            

            {status.type === 'error' ? <p style={{color:"red"}} >{status.mensagem}</p>:""}
            {status.type === 'success' ? <p style={{color:"green"}}>{status.mensagem}</p>:""} 
            {status.type === 'redSuccess' ? <Redirect to={{
                pathname:"/listar",
                state:{
                    type: "success",
                    mensagem: status.mensagem
                }
            }} /> :"" }

            <Form onSubmit={addProduto}>
                <Label htmlFor="nome">Nome:</Label>
                <Input onChange={valueInput} type="text" name="nome" placeholder="Nome do Produto"/>

                <Label htmlFor="valor">Valor:</Label>
                <Input onChange={valueInput} type="text" name="valor" placeholder="Valor do Produto"/>

                <Label htmlFor="quantidade">Quantidade:</Label>
                <Input onChange={valueInput} type="number" name="quantidade" placeholder="Quantidade do Produto"/>

               <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
            </Form>
        </Container>
    )
}