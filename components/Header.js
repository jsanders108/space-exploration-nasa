import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const MainContainer = styled.div`
     background: url("/images/galaxy.webp");
     padding-top: 30px; 
     padding-bottom: 110px; 
     background-size: cover;
     display: flex;
     flex-direction: column; 
    text-align: center;
    font-family: 'Orbitron', sans-serif;
    color: #82a5ca;
    `

const LinksWrapper = styled.div`
    display: flex;
    justify-content: flex-end; ; 
    margin: 0px 30px 20px; 
    `
const Title = styled.h1`
    text-shadow: 0px 0px 4px black;
    `

export default function Header(){
    return (
        <MainContainer>
            <LinksWrapper>
                <Link className="home-link" to="/">Home Page</Link>
                <Link className="mars-link" to="/mars">Mars Page</Link>
            </LinksWrapper>
            <Title>SPACE EXPLORATION</Title>   
        </MainContainer>         
    )
}
