import React from 'react';
// import Container from '../Container';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/svg/nav-logo.svg';
import "./style.css";

const styles ={
  textDecoration: "none",
  color: "white",
  // fontSize: "20px"
}


// Footer
const Footer = () => {
  return (
    <footer className="footer text-light mt-4" style={{background: '#121212'}}>
      <Container fluid>
        <div className="d-flex justify-content-center">
          <Image src={navLogo} className="mr-2" style={{ width: '30px' }} />
          <div className='mr-auto'>© 2020 Music eXchange All Rights Reserved</div>
          <Link to="/team" style={styles}>Meet the team</Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;