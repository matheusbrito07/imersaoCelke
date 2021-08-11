import Menu from "../../components/menu"
import { Container, ConteudoTitulo, Titulo } from "../../styles/customStyle"

export default function Dashboard (){
    return(
        <Container>
            <Menu />
                <ConteudoTitulo>
                    <Titulo>Bem vindo - Projeto Celke</Titulo>
                </ConteudoTitulo>
        </Container>
    )
}