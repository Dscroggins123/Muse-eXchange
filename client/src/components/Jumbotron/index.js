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
    <Jumbotron fluid className='mb-0 pt-5 pb-2' style={styles} >
      <div class="pl-5" style={{ width: '30%'}}>
        <h1 style={{fontFamily: 'Kumbh Sans, sans-serif'}}>Share your creativity!</h1>
        <p style={{fontFamily: 'Kumbh Sans, sans-serif'}}>
          Welcome to Music eXchange! Please explore the different user profiles to see what content each user has created!
        </p>
        <hr className="my-4" style={{ background: "white" }} />
        <p style={{fontFamily: 'Kumbh Sans, sans-serif'}}>
          In each profile you can make a request to purchase a song, or to purchase a tutorial from the user!
        </p>
        <p>
          <Button variant="outline-light" style={{fontFamily: 'Kumbh Sans, sans-serif'}}>Learn more</Button>
        </p>
      </div>
    </Jumbotron>
  )
}

export default JumbotronComponent;