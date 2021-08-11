import { NavLink } from "react-router-dom"
import { NavList } from "./style"

export default function Menu (){
    return(
        <NavList>
            <NavLink to="/"><li>Dashboard</li></NavLink>
            <NavLink to="/listar"><li>Listar</li></NavLink>
            
        </NavList>
    )
}
            
