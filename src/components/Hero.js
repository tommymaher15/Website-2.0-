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
margin: 0px 0px 20px 3px;
font-size: 16px;
font-weight: normal;
font-family: "SF-Regular"; `

const Button = styled.button`

font-size: 1.3rem;
border:none;
border-radius: 5px;
`;
const Hero2 = styled.h2`
font-size:80px;
font-family: "calibre-Bold";
line-height:1.1;
font-weight: 600;
color:rgb(204, 214, 246);

`;

const Hero3 = styled.p`
font-size:80px;
font-family: "calibre-Bold";
color: rgb(136, 146, 176);
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