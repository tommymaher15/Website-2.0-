import React from 'react'
import styled from "styled-components";

const  Nav = styled.header`

display:flex;
-moz-box-pack: justify;
justify-content: space-between;
-moz-box-align: center;
align-items: center;

top: 0px;
padding: 0px 50px;
background-color: rgb(10, 25, 47);
transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
z-index: 11;
filter: none !important;
pointer-events: auto !important;
user-select: auto !important;
width: 100%;
height: 100px;
box-shadow: none;
transform: translateY(0px);
color:rgb(204, 214, 246);




`;

const NavItem = styled.ul`

  box-sizing:border-box;
color:rgb(204, 214, 246);
cursor:pointer;
display:inline-block;
font-family:"SF-Regular";
font-size:13px;
height:auto;
line-height:16.9px;
list-style-image:none;
list-style-position:outside;
list-style-type:none;
padding-bottom:12px;
padding-left:1000px;
padding-right:10px;
padding-top:12px;
pointer-events:auto;
position:relative;
text-align:right;
text-decoration-color:rgb(204, 214, 246);
text-decoration-line:none;
text-decoration-skip-ink:auto;
text-decoration-style:solid;


width:auto;
-webkit-font-smoothing:antialiased;
`;

const NavSub = styled.li`
display:inline-block;
padding-left:2em;
float:none; 



`;

export default function header() {
    return (
        <div>
            <Nav>
       
       <NavItem>
   <NavSub>About</NavSub>
   <NavSub>Work</NavSub>
   <NavSub>Contact</NavSub>
       </NavItem>

       
           
            </Nav> 
            </div>
           
      
    )
}


