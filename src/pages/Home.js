import React from 'react'
import styled from 'styled-components'
import RowList from '../components/RowList'

import requests from '../request'

const HomeContainer = styled.div`
  height: 1000px;
  color: black;
  background: white;
  display: block;
  justify-content: space-between
`

function Home() {
    return (
        <HomeContainer>
            <RowList title="Trending Now" fetchUrl={requests.fetchTrending} />
            <RowList title="Action" fetchUrl={requests.fetchAction} />
            <RowList title="Popular" fetchUrl={requests.fetchPopular} />

        </HomeContainer>
    )
}

export default Home
