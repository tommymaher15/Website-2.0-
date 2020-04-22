import React from 'react'
import styled from "styled-components";

const  SocialsBar = styled.div `
float:right;
width: 100px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    color: rgb(168, 178, 209);
    background-color:#0a192f;

`

export default function Socials() {
    return (
        <div className = "Socials-Bar">
          <SocialsBar>
           <li>icon</li>
           <li>icon</li>
           <li>icon</li>
           <li>icon</li>
           </SocialsBar>
            
        </div>
    )
}
