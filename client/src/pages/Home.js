import React, { Component } from 'react';
import UserList from '../components/Users/UserList';
import { Container } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';
import { Redirect, Link } from "react-router-dom";

const styles = {
  home: {
    height: "100%"
  }
}
const professions = ["Musician", "Guitar", "Hip-Hop", "Piano", "Beatmaking"];

class Home extends Component {
  state = {
    users: [],
    musicians: [],
    guitars: [],
    hipHop: [],
    piano: [],
    dancers: [],
    currentUser: {},
  }

  componentDidMount() {
    document.title = `Music eXchange | Home`;
    this.getUsers();
    this.getMusicians();
    this.getGuitarist();
    this.getHipHop();
    this.getPiano();
  }

  /** Get all Users */
  getUsers = () => {
    API.getSavedUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  /** Get all Musicians */
  getMusicians = () => {
    API.getUsersByProfession(professions[0])
      .then(res => this.setState({ musicians: res.data }))
      .catch(err => console.log(err));
  }

  /** Get all Musicians */
  getGuitarist = () => {
    API.getUsersByProfession(professions[1])
      .then(res => this.setState({ guitars: res.data }))
      .catch(err => console.log(err));
  }

  /** Get all Musicians */
  getHipHop = () => {
    API.getUsersByProfession(professions[2])
      .then(res => this.setState({ hipHop: res.data }))
      .catch(err => console.log(err));
  }

  getPiano = () => {
    API.getUsersByProfession(professions[3])
      .then(res => this.setState({ piano: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      !this.props.user && !this.props.pending ? <Redirect to="/signin" /> :
        <>
          <Jumbotron />
          <Container style={{background: '#181818', height: '100%', width: '100%'}} className='text-light mt-0 p-4' >
            {this.state.users && (<>
              <div className="mt-4 border-bottom border-secondary mb-4">
                <h2>Explore</h2>
                <hr className="my-4" />
              </div>
              {/** Show All User */}
              <UserList users={this.state.users} />
            </>)}

            <div className="mt-4 border-bottom border-secondary mb-4">
              <h2>Guitar</h2>
            </div>
            {/** Show All User */}
            <UserList users={this.state.guitars} />

            {this.state.hipHop && (<>
              <div className="mt-4 border-bottom border-secondary mb-4">
                <h2>Hip Hop</h2>
              </div>
              {/** Show All User */}
              <UserList users={this.state.hipHop} />
            </>)}

            {this.state.piano && (<>
              <div className="mt-4 border-bottom border-secondary mb-4">
                <h2>Piano</h2>
              </div>
              {/** Show All User */}
              <UserList users={this.state.piano} />
            </>)}
          </Container>
        </>
    )
  }

}

export default Home;