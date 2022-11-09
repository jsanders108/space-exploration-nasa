import React from "react"
import styled from "styled-components"

const Container = styled.div`
    background: white;
    width: 100%;
    display: flex;
    justify-content: center; 
    padding: 1rem 0rem; 
    margin-top: 0.5rem;
    `

const Logo =styled.img`
    margin-left: .7rem; 
    align-self: center; 
    width: 90px; 
`

export default function Footer(){
    return(
        <Container>
            <p>API powered by</p>
            <Logo src="./images/nasalogo.jpg" />
        </Container>
    )
}

