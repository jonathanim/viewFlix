import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';
import { Link } from 'react-router-dom'
import Registration from './Registration';
import Login from './Login';
import Home from '../pages/Home';


const Container = styled.div`
    height: 100px;
    color: white;
    background: black;
    display: flex;
    justify-content: space-between
`;

const Wrapper = styled.div`
  color: white;
  justify-content: center;
  align-items:center;
  display: flex;
`;

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  fontSize: "30px",
  margin: "1rem",
  textDecoration: "none",
  color: 'white'

};

function Navbar() {
  return (
    <Container>
      <Wrapper >
        {/* logo*/}
        <Logo />
      </Wrapper>
      {/* Links*/}
      <Wrapper>
        <NavUnlisted>
          <Link to="/home" style={linkStyle}>Home</Link >
          <Link to="/tvshows" style={linkStyle}>Tv Shows</Link >
          <Link to="/movies" style={linkStyle}>Movies</Link >
        </NavUnlisted>
      </Wrapper>
      <Wrapper >
        {/* logo*/}
        <Login />
        <Registration />
      </Wrapper>
      {/* Register*/}
      {/* Login*/}
    </Container>
  )
}

export default Navbar
