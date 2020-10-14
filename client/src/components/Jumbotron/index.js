import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import recording from '../../assets/images/recording.jpg';
import musicExchangeWallpaper from '../../assets/images/music-exchange-wallpaper.svg'


const styles = {
  // backgroundColor: "transparent",
  // height: "50vh",
  color: "white",
  backgroundImage: `url('${musicExchangeWallpaper}')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // backgroundColor: 'transparent'
}

const JumbotronComponent = () => {
  return (
    <Jumbotron className='mb-0' style={styles} >
      <div style={{ width: '30%' }}>
        <h1>Share your creativity!</h1>
        <p>
          Welcome to Music eXchange! Please explore the different user profiles to see what content each user has created!
        </p>
        <hr className="my-4" style={{ background: "white" }} />
        <p>
          In each profile you can make a request to purchase a song, or to purchase a tutorial from the user!
        </p>
        <p>
          <Button variant="outline-light">Learn more</Button>
        </p>
      </div>
    </Jumbotron>
  )
}

export default JumbotronComponent;