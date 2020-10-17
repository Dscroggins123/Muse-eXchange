import React, { Component } from 'react';
import UserList from '../components/Users/UserList';
import { Container, Row, Col, Button, ListGroup, Badge, Accordion, Card } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Redirect, Link } from "react-router-dom";
// Materialize-UI icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Components
import SongCard from '../components/SongCard';

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
          {/* <div>
            <Jumbotron />
          </div> */}
          <Container fluid style={{ height: '100%', width: '100%', fontFamily: 'Kumbh Sans, sans-serif' }} className=' mt-0' >
            <Row>
              <Col xs={12} md={2} style={styles.sideCol}>
                <div className='mt-2 mb-4'>
                  <h3 style={styles.sideHeading}>Instruments</h3>
                  <Accordion>
                    {/** Guitar */}
                    <Card className='border-0' style={{background: '#181818', color: '#fff'}}> 
                      <Card.Header className='text-center p-1 d-flex justify-content-between'>
                        <div>
                          <span className='m-1'>Guitar</span>
                          <Badge variant="secondary" className='m-1 align-self-center'>9</Badge>
                          <span className="sr-only">unread messages</span>
                        </div>
                        <Accordion.Toggle eventKey="0" className='p-0' style={styles.accordionButton}>
                          <ExpandMoreIcon className='text-secondary' style={styles.expandIcon}/>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className='p-0'>
                          <ListGroup defaultActiveKey="#link1" variant="flush" style={styles.userListItem}>
                            {/* <ListGroup.Item action onClick={alertClicked}></ListGroup.Item> */}
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 1
                            </ListGroup.Item>
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 2
                            </ListGroup.Item>
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 3
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    {/** Hip-Hop */}
                    <Card className='border-0' style={{background: '#181818', color: '#fff'}}> 
                      <Card.Header className='text-center p-1 d-flex justify-content-between'>
                        <div>
                          <span className='m-1'>Hip-Hop</span>
                          <Badge variant="secondary" className='m-1 align-self-center'>9</Badge>
                          <span className="sr-only">unread messages</span>
                        </div>
                        <Accordion.Toggle eventKey="1" className='p-0' style={styles.accordionButton}>
                          <ExpandMoreIcon className='text-secondary' style={styles.expandIcon}/>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className='p-0'>
                          <ListGroup defaultActiveKey="#link1" variant="flush" style={styles.userListItem}>
                            {/* <ListGroup.Item action onClick={alertClicked}></ListGroup.Item> */}
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 1
                            </ListGroup.Item>
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 2
                            </ListGroup.Item>
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 3
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    {/** Piano */}
                    <Card className='border-0' style={{background: '#181818', color: '#fff'}}> 
                      <Card.Header className='text-center p-1 d-flex justify-content-between'>
                        <div>
                          <span className='m-1'>Piano</span>
                          <Badge variant="secondary" className='m-1 align-self-center'>9</Badge>
                          <span className="sr-only">unread messages</span>
                        </div>
                        <Accordion.Toggle eventKey="2" className='p-0' style={styles.accordionButton}>
                          <ExpandMoreIcon className='text-secondary' style={styles.expandIcon}/>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className='p-0'>
                          <ListGroup defaultActiveKey="#link1" variant="flush" style={styles.userListItem}>
                            {/* <ListGroup.Item action onClick={alertClicked}></ListGroup.Item> */}
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 1
                            </ListGroup.Item>
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 2
                            </ListGroup.Item>
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 3
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    {/** Beats */}
                    <Card className='border-0' style={{background: '#181818', color: '#fff'}}> 
                      <Card.Header className='text-center p-1 d-flex justify-content-between'>
                        <div>
                          <span className='m-1'>Beats</span>
                          <Badge variant="secondary" className='m-1 align-self-center'>9</Badge>
                          <span className="sr-only">unread messages</span>
                        </div>
                        <Accordion.Toggle eventKey="3" className='p-0' style={styles.accordionButton}>
                          <ExpandMoreIcon className='text-secondary' style={styles.expandIcon}/>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className='p-0'>
                          <ListGroup defaultActiveKey="#link1" variant="flush" style={styles.userListItem}>
                            {/* <ListGroup.Item action onClick={alertClicked}></ListGroup.Item> */}
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 1
                            </ListGroup.Item>
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 2
                            </ListGroup.Item>
                            <ListGroup.Item action style={{background: '#181818', color: '#fff'}}>
                              User 3
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>

                <div className='mt-2 mb-4'>
                  <h3 style={styles.sideHeading}>New Songs</h3>
                  <ListGroup defaultActiveKey="#link1">
                    {/* <ListGroup.Item action onClick={alertClicked}></ListGroup.Item> */}
                    <ListGroup.Item className='p-0 d-flex justify-content-between' style={{background: '#181818', color: '#fff'}}>
                      <div style={{ width: '4rem' }}>
                        <SongCard />
                      </div>
                      <div className='w-100 ml-2 align-self-center' style={{fontSize: '12px'}}>
                        <div>New Song 1</div>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className='p-0 d-flex justify-content-between' style={{background: '#181818', color: '#fff'}}>
                      <div style={{ width: '4rem' }}>
                        <SongCard />
                      </div>
                      <div className='w-100 ml-2 align-self-center' style={{fontSize: '12px'}}>
                        <div>New Song 2</div>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className='p-0 d-flex justify-content-between' style={{background: '#181818', color: '#fff'}}>
                      <div style={{ width: '4rem' }}>
                        <SongCard />
                      </div>
                      <div className='w-100 ml-2 align-self-center' style={{fontSize: '12px'}}>
                        <div>New Song 3</div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col xs={12} md={10} className='border border-secondary border-top-0 border-left-0' style={{ background: '#181818', color: '#fff' }}>
                {this.state.users && (<>
                  <div className="mt-2  mb-2">
                    <h2 className='mb-0' style={styles.heading}>Explore</h2>
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
              </Col>
            </Row>
          </Container>
        </>
    )
  }

}

export default Home;