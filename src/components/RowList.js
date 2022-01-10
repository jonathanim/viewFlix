import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../axios'

const RowContent = styled.div`
width: 100%;
`
const SubTitle = styled.div`
font-size: 50px;
font-weight: bold;
margin: 10px
`
const MoviePosters = styled.div`
margin: 10px;   
display:flex;
overflow-y: hidden;
overflow-x: scroll;
`

const MoviePoster = styled.div`
width: 100%;
object-fit: contain;
margin: 10px;
transition: transform 400ms;


&:hover {
    transform: scale(1.20);
}
`
const ImageURL = "Https://image.tmdb.org/t/p/original"
function RowList({ title, fetchUrl }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request.data)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])
    return (
        <RowContent>
            <SubTitle>{title}</SubTitle>
            <MoviePosters>
                {movies.map(movie => {
                    return (
                        <MoviePoster key={movie.id}>
                            <img src={`${ImageURL}${movie.poster_path}`} alt={movie.name} style={{ height: "150px", width: "auto" }} />
                        </MoviePoster>
                    )
                })}
            </MoviePosters>
        </RowContent>
    )
}

export default RowList
