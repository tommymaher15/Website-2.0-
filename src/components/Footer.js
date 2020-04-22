import React from 'react'
import styled from "styled-components";


const Footer1 = styled.footer`
display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(2, 12, 27);
    color: rgb(136, 146, 176);
    text-align: center;
    height: auto;
    min-height: 70px;
    padding: 15px;
`;

export default function Footer() {
    return (
        <div>
        <Footer1>
           <p> Testing</p>
            </Footer1>
        </div>
    )
}
