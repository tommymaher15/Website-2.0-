import React from 'react'
import styled from "styled-components";

const  SocialsBar = styled.div `
float:right;
    height: 100%;
    width: 160px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: auto;
    
    background-color:#0a192f; 
`
const SocialList = styled.ul`
position:relative;
top:400px;
display: flex;
flex-direction: column;
color:white;`

const SocialItem = styled.li`
margin-top:10px;
`;


export default function Socials() {
    return (
        <div className = "Socials-Bar">
          <SocialsBar>
          <SocialList>
           <li>icon</li>
           <li>icon</li>
           <li>icon</li>
           <li>icon</li>
           </SocialList>
           </SocialsBar>
            
        </div>
    )
}
