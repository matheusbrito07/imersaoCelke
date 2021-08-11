import style from "styled-components"

export const NavList = style.ul`
    display:flex;
    background-color: #0d6efd;
    padding: 15px 2px;
    font-family: sans-serif;
    margin-bottom: 15px;
    a{
        text-decoration: none;
        color:#f9f9f9;
        margin: 0px 8px;
    }

    a:hover{
        color:#d0d2db;
    }

    li{
        margin:0px 1px;
        font-size:1.0rem;
        list-style: none;
    }
    
`;