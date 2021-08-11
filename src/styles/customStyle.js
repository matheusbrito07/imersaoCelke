import styled from "styled-components";

export const Container = styled.section`
    margin: 0px auto;
    width: 960px;
    max-width:960px;

`;

export const ConteudoTitulo = styled.section`
    display:flex;
    justify-content: space-between;

    
`;

export const Titulo = styled.h1`
    font-size: 23px;
    font-family:sans-serif;
    margin: 10px 15px;
    color: #1d1e1e;
    
`;

export const BotaoAcao = styled.button`
    margin: 5px;
`;

export const ButtonSuccess = styled.button`
    background-color:#fff;
    color: #198754;
    padding: 5px 8px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color:#198754;
        color:#fff
    }
    
`;

export const ButtonPrimary = styled.button`
    background-color:#fff;
    color: #0d6efd;
    padding: 5px 8px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color:#0d6efd;
        color:#fff
    }
    
`;
export const ButtonWarning = styled.button`
    background-color:#fff;
    color: #ffc107;
    padding: 5px 8px;
    border: 1px solid #ffc107;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color:#ffc107;
        color:#fff
    }
    
`;
export const ButtonDanger = styled.button`
    background-color:#fff;
    color: red;
    padding: 5px 8px;
    border: 1px solid red;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color:red;
        color:#fff
    }
    
`;
export const ButtonInfo = styled.button`
    background-color:#fff;
    color:#0dcaf0;
    padding: 5px 8px;
    border: 1px solid #0dcaf0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color:#0dcaf0;
        color:#fff
    }
    
`;
export const Table = styled.table`
    margin-top: 15px;
    width:100%;
    th{
        background-color:#007281;
        color:#f1f1f1;
        padding:10px;
    }
    td{
        background-color:#f6f6f6;
        color:#3e3e3e;
        padding:8px;
        
    }
`;

export const ConteudoView = styled.p`
    margin-top:15px;
    font-size:18px;
    font-family: sans-serif;
`;

export const Form = styled.form`
    margin: 0px auto;
`;

export const Label = styled.label`
    margin-top: 6px;
    margin-bottom: 16px;
    padding:12px;
    width:100%;
    
`;

export const Input = styled.input`
    width:100%;
    padding:12px;
    border: 1px solid #ccc;
    border-radius:4px;
    box-sizing: border-box;
    margin-top: 6px;
    resize:vertical;
    
`;

export const Hr = styled.hr`
    margin-botton:15px;
    
`;