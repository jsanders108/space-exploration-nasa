import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const PicOfDayWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    background: whitesmoke; 
    padding: 20px;  
    @media (min-width: 800px) {
        margin: 0 auto;  
        max-width: 700px; 
    }
    `
    
const PicOfDayContainer = styled.div`
    background: whitesmoke; 
    `

const SectionTitle = styled.h2`
    font-family: 'Orbitron', sans-serif;
    font-size: 30px; 
    `

const PicOfDayTitle = styled.h3`
    margin-bottom: 0px; 
    `

const PicOfDayDate = styled.p`
    margin-top: 0px; 
    `

const PicOfDayImage = styled.img`
    max-width: 700px;  
    `
    
const SearchImageWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 20px;      
    @media (min-width: 800px) {
        margin: 0 auto;  
        max-width: 700px; 
    }
    `
    
const FormWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    width: 250px; 
    `

const FormInput = styled.input`
    border: solid grey;
    border-radius: 7px; 
    padding-left: 5px; 
    padding-top: 10px;
    padding-bottom: 10px; 
    font-family: sans-serif;
    `

const FormButton = styled.button`
    background: black;
    font-family: sans-serif;
    color: #82a5ca; 
    font-size: 20px; 
    margin-top: 10px; 
    padding: 10px 0px; 
    border-radius: 7px; 
    `

const SearchImageTitle = styled.h2`
    font-family: 'Orbitron', sans-serif;
    font-size: 30px; 
    `

const SearchImageSubTitle =styled.p`
    font-family: sans-serif;
    font-size: 16px; 
    margin-top: 15px; 
    margin-bottom: 25px; 
    `
    
const ReturnedImage = styled.img`
    width: 95%; 
    `

export default function Home(){
    
    const [picOfDay, setPicOfDay] = React.useState({})
    const [searchTerm, setSearchTerm] = React.useState("")
    const [searchImage, setSearchImage] = React.useState({})
    
    let picOfDayJSX = null
    let searchImageJSX = null
    
    React.useEffect( function(){
        fetch('https://api.nasa.gov/planetary/apod?api_key=hr4jhaSYX9sMI66JMSbYdCYkgUP4e1cbi3ZzluqR')
        .then((response) => response.json())
        .then((data) => {
            setPicOfDay(data)
        });
    }, [])
    
   
    const picOfDayIsEmpty = Object.keys(picOfDay).length === 0;
   
    if(!picOfDayIsEmpty){
       picOfDayJSX = (
          <PicOfDayContainer>
            <PicOfDayWrapper>
                <SectionTitle>NASA'S PICTURE OF THE DAY</SectionTitle>
                <PicOfDayImage src={picOfDay.url} />
                <PicOfDayTitle>{picOfDay.title}</PicOfDayTitle>
                <PicOfDayDate>Date: {picOfDay.date}</PicOfDayDate>
                <p><span className="bold">Description:</span> {picOfDay.explanation}</p>
            </PicOfDayWrapper>
          </PicOfDayContainer>)
    }
 
    function handleTextEntry(event) {
        setSearchTerm(event.target.value)
    }
   
    function getPicture(){
        fetch(`https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`)
        .then((response) => response.json())
        .then((data) => {
            const randomNum = Math.floor(Math.random() * 100) 
            setSearchImage(data.collection.items[randomNum])
            setSearchTerm("")
        });
    }
   
    const searchImageIsEmpty = Object.keys(searchImage).length === 0;

    if(!searchImageIsEmpty){
       searchImageJSX = (
           <div>
                <ReturnedImage src={searchImage.links[0].href} />
                <h3>{searchImage.data[0].title}</h3>
                <p><span className="bold">Description:</span> {searchImage.data[0].description_508}</p>
            </div>)
    }

    
    return (
        <div>
            {!picOfDayIsEmpty && picOfDayJSX}
            <SearchImageWrapper>
                <SearchImageTitle>Image Search</SearchImageTitle>
                <FormWrapper>
                    <FormInput 
                        type="text"
                        placeholder="Enter search term"
                        name="search-term"
                        value={searchTerm}
                        onChange={handleTextEntry}
                    />
                    <FormButton onClick={getPicture}>Search</FormButton>
                </FormWrapper>
                <SearchImageSubTitle>(Get a random picture from Nasa's database)</SearchImageSubTitle>
                {!searchImageIsEmpty && searchImageJSX}
            </SearchImageWrapper>
        </div>
    )
}

