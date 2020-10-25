import React, { Component } from 'react';
import UserList from '../components/Users/UserList';
import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Redirect, Link } from "react-router-dom";
// Materialize-UI icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Components
import Sidebar from '../components/Home/Sidebar';
import Footer from '../components/Footer';
import SongCard from '../components/SongCard';
import SearchButton from '../components/Home/SearchButton';
import PurchasedSongs from '../components/Home/PurchasedSongs';
import PurchasedTutorials from '../components/Home/PurchasedTutorials';

const styles = {
  home: {
    height: "100%"
  },
  heading: {
    fontSize: '20px',
    borderBottom: '1px solid #282828'
  },
  sideHeading: {
    fontSize: '20px',
  },
  sideCol: {
    // background: '#F8F8F8'
    background: '#121212',
    color: '#fff',
  },
  accordionButton: {
    backgroundColor: 'transparent',
    border: '0px',
    outline: 'none',
    // textDecoration: 'none'
  },
  expandIcon: {
    fontSize: '16px'
  },
  userListItem: {
    fontSize: '12px'
  }
}
const professions = ["Musician", "Guitar", "Hip-Hop", "Piano", "Beats"];

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
    window.scrollTo(0, 0);

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
        {console.log('home', this.props.user)}
          <Tab.Container id="left-tabs-example" defaultActiveKey="musicians">
            <Row style={{ height: '100%', fontFamily: 'Kumbh Sans, sans-serif' }}>
              <Col xs={12} md={2} style={styles.sideCol} className='pr-0 d-none d-sm-block'>
                <Sidebar />
              </Col>
              <Col xs={12} md={10} className='p-0' style={{ background: '#181818', color: '#fff', height: '100%', overflow: 'auto' }}>

                <Tab.Content>
                  <Tab.Pane eventKey="musicians">
                    <Jumbotron />
                    <Container fluid>
                      {this.state.users && (<>
                        <div className="mt-2 mb-2 d-flex justify-content-between" style={{ borderBottom: '1px solid #282828' }}>
                          <h2 className='mb-0 align-self-end' style={{fontSize: '20px'}}>Explore</h2>
                          <SearchButton />
                        </div>
                        {/** Show All User */}
                        <UserList users={this.state.users} />
                      </>)}

                      <div className="mt-2 mb-2">
                        <h2 className='mb-0' style={styles.heading}>Guitar</h2>
                      </div>
                      {/** Show All User */}
                      <UserList users={this.state.guitars} />

                      {this.state.hipHop && (<>
                        <div className="mt-2 mb-2">
                          <h2 className='mb-0' style={styles.heading}>Hip Hop</h2>
                        </div>
                        {/** Show All User */}
                        <UserList users={this.state.hipHop} />
                      </>)}

                      {this.state.piano && (<>
                        <div className="mt-2 mb-2">
                          <h2 className='mb-0' style={styles.heading}>Piano</h2>
                        </div>
                        {/** Show All User */}
                        <UserList users={this.state.piano} />
                      </>)}
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="purchasedSongs">
                    <h2 className='m-0' style={{background: 'linear-gradient(#121212, #181818)', height: '100px'}}>Purchased Songs</h2>
                    <PurchasedSongs />
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="purchasedTutorials">
                    <h2 className='m-0' style={{background: 'linear-gradient(#121212, #181818)', height: '100px'}}>Purchased Tutorials</h2>
                    <PurchasedTutorials />
                  </Tab.Pane> */}
                </Tab.Content>

                <div style={{ height: '25vh' }}></div>
                <div className='d-block d-sm-none' style={{ height: '50vh' }}></div>
              </Col>
            </Row>
          </Tab.Container>
        </>
    )
  }

}

export default Home;