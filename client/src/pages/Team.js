import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Card, Button, Image, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import teamWallpaper from '../assets/images/team-wallpaper.svg';
const team = ["nickgusd", "juhee-k", "Dscroggins123", "edwardreyes29"];

const styles = {
  // textDecoration: "none",
  fontWeight: "bold",
  color: "black",
}

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  const [hover, setHover] = useState(false);


  // useEffect will fetch from url
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json()) // convert data response to json
      .then(setData) // call setData function -> call function with new value of data -> passing in the function
      .catch(console.error);
  }, []);

  const hoverTrue = () => {
    setHover(true);
  }

  const hoverFalse = () => {
    setHover(false);
  }

  let cardStyle;
  if (hover) {
    cardStyle = {
      opacity: 1,
      background: 'rgba(0,0,0,0.8)',
      transition: `${hover ? '0.5s' : '0.5s;'}`
    }
  } else {
    cardStyle = {
      opacity: 0,
      background: 'rgba(0,0,0,0)',
      transition: `${hover ? '0.5s' : '0.5s;'}`,
      alignItems: 'center',
    }
  }

  if (data) { // if we have some data
    return (
      <>
        <Col className='d-flex justify-content-center'>
          <div className="text-center">
            <a href={data.html_url} target="_blank" style={{ textDecoration: 'none', outline: 'none' }}>
              <Image src={data.avatar_url} roundedCircle width={200} />
            </a>
            <div><h3>{data.login}</h3></div>
            {/* <p>{data.bio}</p> */}
            <div className='d-flex justify-content-center'>
              <GitHubIcon style={{ color: '#000', fontSize: '18px'}} />
              <a href={data.html_url} target="_blank" className='ml-1' style={{ color: '#000' }}>
                GitHub
              </a>
            </div>
            <a href={data.blog} target="_blank" style={{ color: '#000' }}>Portfolio</a>
          </div>
        </Col>
      </>
    )
  }
  return null;
}

function Team(props) {
  console.log(props.user)
  return (<>
    <Jumbotron fluid className='mb-0 pt-5 pb-2 text-light' style={{ backgroundImage: `url(${teamWallpaper})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
      <div class="pl-5"  style={{width: '40%'}}>
        <h1 className="font-weight-bold">Meet the Development Team!</h1>
        <hr className="my-4" style={{ background: "white" }} />
        <p>We are proud Full-Stack Web Developers and we are always open to discussing new project ideas or partnership opportunities.</p>
        <p>Visit our GitHubs!</p>
      </div>
    </Jumbotron>
    <Container fluid className='p-4' style={{ background: '#fff' }}>
      <Row xs={1} md={2} lg={4} className="pt-4 pb-4">
        {team.map(member =>
          <GitHubUser login={member} />
        )}
      </Row>
      <div style={{height: '20vh'}}></div>
    </Container>

  </>)
}
export default Team;