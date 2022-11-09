import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"


const MainContainer = styled.div`
    background: whitesmoke; 
    padding-bottom: 20px; 
    `

const Wrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    padding: 20px; 
     
    @media (min-width: 800px) {
        margin: 0 auto;  
        max-width: 700px; 
    }
    `

const Title = styled.h2`
    font-family: 'Orbitron', sans-serif;
    `

const subTitle = styled.p`
    margin-top: 10px;
    margin-bottom: 30px; 
    `

const Button = styled.button`
    background: black;
    font-family: sans-serif;
    color: #82a5ca; 
    font-size: 20px; 
    margin-top: 10px; 
    padding: 10px 0px; 
    border-radius: 7px; 
    width: 200px; 
    `
    
const RoverImage = styled.img`
    width: 100%; 
    margin: 0, auto; 
    `

export default function Mars(){
    
    const [marsData, setMarsData] = React.useState([])
    const [marsImages, setMarsImages] = React.useState([])
    const [displayPic, setDisplayPic] = React.useState("")
    
    let marsPicJSX = null

    React.useEffect( function(){
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hr4jhaSYX9sMI66JMSbYdCYkgUP4e1cbi3ZzluqR')
        .then((response) => response.json())
        .then((data) => {
           setMarsData(data.photos)
           setMarsImages(data.photos.map( item => item.img_src))
        });
    }, [])
    
    function handleClick(){
         const randomNum = Math.floor(Math.random() * 856)
         setDisplayPic(marsImages[randomNum])
    }
    
    if(displayPic){
        marsPicJSX = (
            <div>
               <RoverImage src={displayPic} />
            </div> 
        )}
   
    return (
        <MainContainer>
            <Wrapper>
                <Title>Mars Rover Images</Title>
                <Button onClick={handleClick}>Fetch Picture</Button>
                <p>(Get a random picture from Nasa's database)</p>
                {marsImages.length > 0 && marsPicJSX}
            </Wrapper>
        </MainContainer>
    )
}