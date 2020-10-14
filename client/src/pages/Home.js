import React, { Component } from 'react';
import UserList from '../components/Users/UserList';
import { Container, Row, Col, Button, ListGroup, Badge} from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Redirect, Link } from "react-router-dom";

const styles = {
  home: {
    height: "100%"
  },
  heading: {
    fontSize: '25px'
  },
  sideHeading: {
    fontSize: '20px',
  },
  sideCol: {
    background: '#F8F8F8'
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
          <div>
            <Jumbotron />
          </div>
          <Container fluid style={{ height: '100%', width: '100%', fontFamily: 'Kumbh Sans, sans-serif' }} className=' mt-0' >
            <Row>
              <Col xs={2} className='border' style={styles.sideCol}>

                <div className='mt-2 mb-4'>
                  <h3 style={styles.sideHeading}>Instruments</h3>
                  <ListGroup defaultActiveKey="#link1">
                    {/* <ListGroup.Item action onClick={alertClicked}></ListGroup.Item> */}
                    <ListGroup.Item action className='d-flex justify-content-between text-center p-1'>
                      <span className='m-1'>Guitar</span>
                      <Badge variant="secondary" className='m-1 align-self-center'>9</Badge>
                      <span className="sr-only">unread messages</span>
                    </ListGroup.Item>
                    <ListGroup.Item action className='d-flex justify-content-between text-center p-1'>
                      <span className='m-1'>Hip-Hop</span>
                      <Badge variant="secondary" className='m-1 align-self-center'>9</Badge>
                      <span className="sr-only">unread messages</span>
                    </ListGroup.Item>
                    <ListGroup.Item action className='d-flex justify-content-between text-center p-1'>
                      <span className='m-1'>Piano</span>
                      <Badge variant="secondary" className='m-1 align-self-center'>9</Badge>
                      <span className="sr-only">unread messages</span>
                    </ListGroup.Item>
                    <ListGroup.Item action className='d-flex justify-content-between text-center p-1'>
                      <span className='m-1'>Beats</span>
                      <Badge variant="secondary" className='m-1 align-self-center'>9</Badge>
                      <span className="sr-only">unread messages</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>

                <div className='mt-2 mb-4'>
                  <h3 style={styles.sideHeading}>New Songs</h3>
                  <ListGroup defaultActiveKey="#link1">
                    {/* <ListGroup.Item action onClick={alertClicked}></ListGroup.Item> */}
                    <ListGroup.Item action>
                      This one is a button
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      This one is a button
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      This one is a button
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col xs={10} className='border border-left-0' style={{ background: '#fff' }}>
                {this.state.users && (<>
                  <div className="mt-2  mb-2">
                    <h2 className='mb-0 border-bottom' style={styles.heading}>Explore</h2>
                  </div>
                  {/** Show All User */}
                  <UserList users={this.state.users} />
                </>)}

                <div className="mt-2 mb-2">
                  <h2 className='mb-0 border-bottom' style={styles.heading}>Guitar</h2>
                </div>
                {/** Show All User */}
                <UserList users={this.state.guitars} />

                {this.state.hipHop && (<>
                  <div className="mt-2 mb-2">
                    <h2 className='mb-0 border-bottom' style={styles.heading}>Hip Hop</h2>
                  </div>
                  {/** Show All User */}
                  <UserList users={this.state.hipHop} />
                </>)}

                {this.state.piano && (<>
                  <div className="mt-2 mb-2">
                    <h2 className='mb-0 border-bottom' style={styles.heading}>Piano</h2>
                  </div>
                  {/** Show All User */}
                  <UserList users={this.state.piano} />
                </>)}
              </Col>
            </Row>
          </Container>
        </>
    )
  }

}

export default Home;