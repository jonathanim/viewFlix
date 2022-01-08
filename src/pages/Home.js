import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  height: 1000px;
  color: black;
  background: white;
  display: flex;
  justify-content: space-between
`

function Home() {
    return (
        <HomeContainer>
            <h1>
                home stuff
            </h1>
        </HomeContainer>
    )
}

export default Home
