import React from 'react'
import styled from "styled-components";

const HeroCard = styled.div `background-color:#0a192f;`;




const Div = styled.div`
background-color:#0a192f;

margin: 0px auto;
padding: 150px 0px;
max-width: 1000px;
display: flex;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
flex-direction: column;
align-items: flex-start;
min-height: 100vh;

`;

const HeroHeader = styled.h1 `
color: rgb(100, 255, 218);
margin: 0px 0px  3px;
font-size: 16px;
font-weight: normal;
font-family: "SF-Regular";
margin-bottom: 20px;
margin-left: 3px;
margin-right: 0px;
margin-top: 0px; `

const Button = styled.button`

color: rgb(100, 255, 218);
font-family: "SF-Regular";
background-color: transparent;
border: 1px solid rgb(100, 255, 218);
border-radius: 3px;
padding: 1.25rem 1.75rem;
font-size: 14px;
line-height: 1;
text-decoration: none;
cursor: pointer;
margin-top: 20px;
`;
const Hero2 = styled.h2`
font-size:80px;
font-family: "calibre-Bold";
line-height:1.1;
font-weight: 600;
color:rgb(204, 214, 246);
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;

`;

const Hero3 = styled.p`
font-size:80px;
font-family: "calibre-Bold";
color: rgb(136, 146, 176);
margin-bottom: 10px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;

`

const Para = styled.p`
font-family: "calibreRegular";
  font-size:20px;
  color: rgb(136, 146, 176);
line-height: 1.3;
margin: 0px 0px 15px
`;







export default function Hero() {
    return ( <HeroCard>
        
        <Div>
        <HeroHeader>Hi my name is</HeroHeader>
        <Hero2>Tommy Maher</Hero2>
            <Hero3>I build things for the web.</Hero3>

            <Para>
              I'm a software engineer based in Dublin specializing in <br>

            </br>building(and sometimes designing) exceptional websites, <br>

            </br>applications and everything in between.
            </Para>
           
            
            <Button>Get in touch</Button>
            
        </Div>
        </HeroCard>
        );
    };