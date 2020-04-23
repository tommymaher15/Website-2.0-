import React from 'react'
import styled from 'styled-components'

const EmailDiv = styled.div`
    float:left;
    height: 100%;
    width: 160px;
    position:fixed;
    top:400px;
    bottom: 0px;
    left: auto;
    right: 0px;
    z-index: 10;
    color: rgb(168, 178, 209);
    background-color:#0a192f; 



`;


export default function Email() {
    return (
        <EmailDiv>
       Email address Here
       </EmailDiv>
    )
}

