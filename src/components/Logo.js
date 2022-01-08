import React from 'react'
import styled from 'styled-components'

const LogoStyled = styled.h1`
font-size: 30px;
margin: 20px 30px;
cursor: pointer;
`

function Logo() {
    return (
        <div>
            <LogoStyled>
                ViewFlix
            </LogoStyled>
        </div>
    )
}

export default Logo
