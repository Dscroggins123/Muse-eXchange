
import React, { useState, useEffect, useRef } from 'react';



import ProductModal from '../ProductModal'
import { Container, Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import API from '../../utils/API';
import { useHistory } from "react-router-dom";
import navLogo from '../../assets/svg/nav-logo.svg';


const styles = {
  link: {
    color: "white",
    textDecoration: 'none'
  },
  X: {
    color: "#FE064C",
  },
  fontMain: {
    fontFamily: 'Kumbh Sans, sans-serif',
    fontWeight: 700,
    paddingTop: '10px',
    marginLeft: '7px'
  }
}

const NavbarComponent = ({ handleLogout }) => {
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);
  const history = useHistory();
  const inputRef = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    runSearch()
  }, []);

  const runSearch = () => {
    API.getSavedUsers()
      .then(res => {
        setResult(res.data)

        console.log(res)
      })
      .catch(err => console.log(err))
  };

  const handleInputChange = event => {
    const { value } = event.target
    setSearch(value);
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    const filterSearch = result.filter(user => user.username === search)

    if (filterSearch.length === 0) {
      console.log("No entries Found")
    } else {
      history.push(`/profile/${filterSearch[0].username}`)
      inputRef.current.value = "";
    }
  }

  return (
    <Navbar variant="dark" expand="lg" style={{ background: '#121212' }}>
      {/* <Link to='/'>
        <Navbar.Brand>
          <Image src={navLogo} style={{ width: '40px' }} />
        </Navbar.Brand>
      </Link> */}
      <Link to="/" className='d-flex justify-content-center' style={{textDecoration: 'none'}}>
        <Image src={navLogo} style={{ width: '40px' }} />
        <Navbar.Brand style={styles.fontMain}>Music e<span style={styles.X} >X</span>change</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="mr-auto" style={{fontFamily: 'Kumbh Sans, sans-serif'}}>
          <Nav.Link href="/" style={styles.fontMain}>
            <Link to="/" style={styles.link}>Home</Link>
          </Nav.Link>
          <Nav.Link onClick={handleShow} style={styles.link}>
            <span style={styles.fontMain}>Sell</span>
          </Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" list="data" onChange={handleInputChange} ref={inputRef} style={{ height: '100%', fontFamily: 'Kumbh Sans, sans-serif' }} />

          <datalist id="data">
            {result.map(item =>
              <option key={item._id} value={item.username} />
            )}
          </datalist>

          <Button variant="none" style={{ background: "#FE064C", color: "#fff", fontFamily: 'Kumbh Sans, sans-serif' }} onClick={handleFormSubmit}>Search</Button>
    
        </Form> */}

        <Nav className="ml-auto">
          <Nav.Link href="/" style={styles.fontMain}>
            <Link to="/account" style={styles.link}>Account</Link>
          </Nav.Link>
          <Nav.Link href="/" style={styles.fontMain}>
            <Link to="/" onClick={handleLogout} style={styles.link}>Log Out</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* <Nav className="mr-auto">
        <Nav.Link href="/" style={styles.fontMain}>
          <Link to="/account" style={styles.link}>Account</Link>
        </Nav.Link>
        <Nav.Link href="/" style={styles.fontMain}>
          <Link to="/" onClick={handleLogout} style={styles.link}>Log Out</Link>
        </Nav.Link>
      </Nav> */}
      {/* <ProductModal state={show} open={handleShow} close={handleClose} /> */}
    </Navbar>
  )
}
export default NavbarComponent;