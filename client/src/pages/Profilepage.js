import React, { Component } from 'react';
import API from '../utils/API';
// Bootstrap
import { Container, Row, Col, Image, Jumbotron, ListGroup, Badge } from 'react-bootstrap';
// Components
import ProfilePic from '../components/ProfilePic';
import ProfileSongList from '../components/ProfileSongList';
// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
// Calendly
import { InlineWidget } from "react-calendly"


const styles = {
  socialIcon: {
    fontSize: '45px',
    padding: '5px',
    color: '#fff'
  },
  heading: {
    fontSize: '20px',
    borderBottom: '1px solid #282828'
  },
  mainFont: {
    fontFamily: 'Kumbh Sans, sans-serif'
  }
}

class Profile extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    profession: "",
    profilePic: "",
    about: "",
    songs: [],
    songInfo: [],
    tutorials: [],
    tutorialInfo: [],
    user: [],
    purchaseSongs: [],
    purchaseSongsInfo: [],
    instruments: "",
    links: ""
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const username = this.props.match.params.username;
    document.title = `Music eXchange | ${username}`;
    this.setState({ ...this.state, username: username, test: "test" });
    this.getUserInfo(username);
    if (localStorage.getItem("currentUser")) {
      this.setState({ user: JSON.parse(localStorage.getItem("currentUser")) });
    }
  }
  // const [user, setUser] = useState();
  // useEffect(()=> {
  //   if(localStorage.getItem("currentUser")){
  //     setUser(JSON.parse(localStorage.getItem("currentUser")));
  //   }
  // },[])
  componentDidUpdate(_, prevState) {
    const username = this.props.match.params.username
    if (prevState.username !== username) {
      return API.getUserByUsername(username).then(res => {
        console.log(res.data.profile)
        this.setState({
          ...this.state,
          id: res.data._id,
          songs: res.data.profile.songs,
          tutorials: res.data.profile.tutorials,
          email: res.data.email,
          firstName: res.data.profile.firstName,
          lastName: res.data.profile.lastName,
          profession: res.data.profile.profession,
          profilePic: res.data.profile.profilePic,
          about: res.data.profile.about,
          username: res.data.username,
          instruments: res.data.profile.instruments,
          links: res.data.profile.links
        })
      })
    }
  }
  getUserInfo = username => {
    API.getUserByUsername(username)
      .then(res => {
        console.log(res.data.profile.songs)
        this.setState(
          {
            ...this.state,
            id: res.data._id,
            songs: res.data.profile.songs,
            tutorials: res.data.profile.tutorials,
            email: res.data.email,
            firstName: res.data.profile.firstName,
            lastName: res.data.profile.lastName,
            profession: res.data.profile.profession,
            profilePic: res.data.profile.profilePic,
            about: res.data.profile.about,
            purchaseSongs: res.data.profile.purchaseSongs,
            instruments: res.data.profile.instruments,
            links: res.data.profile.links
          })
      }).then(() => {
        this.state.tutorials.map(tutorialid => {
          this.getTutorialsByQuery(tutorialid)
        })
      })
      .then(() => {
        /** ----- Songs ----- */
        this.state.songs.map(songid => {
          this.getSongsByQuery(songid);
        });
      }).then(() => {
        /** ---- Purchased Songs ----- */
        this.state.purchaseSongs.map(songid => {
          this.getPurchaseSongsByQuery(songid);
        })
      })
      .catch(err => console.log(err));
  }
  /** ----- Songs ----- */
  getSongsByQuery = id => {
    API.getSongsByQuery(id).then(res => {
      this.setState({ ...this.state, songInfo: [...this.state.songInfo, res.data[0]] })
      this.setState({ ...this.state, songs: this.state.songInfo })
    }).catch(err => console.log(err))
  }
  /** ---- Purchased Songs ----- */
  getPurchaseSongsByQuery = id => {
    API.getSongsByQuery(id).then(res => {
      this.setState({ ...this.state, purchaseSongsInfo: [...this.state.purchaseSongsInfo, res.data[0]] })
      this.setState({ ...this.state, purchaseSongs: this.state.purchaseSongsInfo })
    }).catch(err => console.log(err))
  }
  /** ---- Tutorials ---- */
  getTutorialsByQuery = id => {
    API.getTutorialsByQuery(id)
      .then(res => {
        this.setState({ ...this.state, tutorialInfo: [...this.state.tutorialInfo, res.data[0]] })
        this.setState({ ...this.state, tutorials: this.state.tutorialInfo })
      })
      .catch(err => console.log(err))
  }
  render() {

    if (!this.state.songs) return <h1>Loading...</h1>
    return (<>
      <div style={{ overflow: 'hidden', background: '#000' }}>
        <Jumbotron fluid className='mb-0' style={{
          backgroundImage: `url(${this.state.profilePic})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '30vh',
          border: '0px',
          backgroundColor: 'transparent',
          filter: 'blur(18px)',
          backgroundPosition: 'center',
        }}>
        </Jumbotron>
      </div>
      <Container fluid style={{ paddingRight: '0px', paddingLeft: '0px', background: '#282828', color: '#fff', fontFamily: 'Kumbh Sans, sans-serif' }}>
        <main className="profile-page" >
          <div className="container mx-auto"
            style={{
              marginTop: "0px",
              // position: 'relative',
              bottom: '120px',
              backgroundColor: 'transparent',
              boxShadow: '0px 0px'
            }}>
            <Row style={{ background: 'transparent' }} className='mb-5'>
              {/** User Profile Pic */}
              <Col xs={12} md={5} className='mb-1'
                style={{
                  background: 'transparent',
                  height: '65vh'
                }}>
                <div style={{ width: '20rem' }}>
                  <ProfilePic
                    profilePic={this.state.profilePic}
                  />
                </div>
                <div>
                  <h3>{this.state.firstName} {this.state.lastName}</h3>
                  <Badge pill className='text-light' style={{ fontSize: '16px', background: '#FE064C' }}>{this.state.profession}</Badge>
                  <Badge pill className='text-light m-1' style={{ fontSize: '16px', background: '#FE064C' }}>fdfad</Badge>
                  <Badge pill className='text-light m-1' style={{ fontSize: '16px', background: '#FE064C' }}>fdfad</Badge>
                  <Badge pill className='text-light m-1' style={{ fontSize: '16px', background: '#FE064C' }}>fdfad</Badge>
                  <Badge pill className='text-light m-1' style={{ fontSize: '16px', background: '#FE064C' }}>fdfad</Badge>
                  <Badge pill className='text-light m-1' style={{ fontSize: '16px', background: '#FE064C' }}>fdfad</Badge>
                  <Badge pill className='text-light m-1' style={{ fontSize: '16px', background: '#FE064C' }}>fdfad</Badge>
                  <Row className='d-flex justify-content-start'>
                    {this.state.links.linkedin && <>
                      <Col xs={1}>
                        <a href={this.state.links.linkedin} target='_blank'>
                          <LinkedInIcon style={styles.socialIcon} />
                        </a>
                      </Col>
                    </>}
                    {this.state.links.facebook && <>
                      <Col xs={1}>
                        <a href={this.state.links.facebook} target='_blank'>
                          <FacebookIcon style={styles.socialIcon} />
                        </a>
                      </Col>
                    </>}
                    {this.state.links.instagram && <>
                      <Col xs={1}>
                        <a href={this.state.links.instagram} target='_blank'>
                          <InstagramIcon style={styles.socialIcon} />
                        </a>
                      </Col>
                    </>}
                    {this.state.links.twitter && <>
                      <Col xs={1}>
                        <a href={this.state.links.twitter} target='_blank'>
                          <TwitterIcon style={styles.socialIcon} />
                        </a>
                      </Col>
                    </>}
                    {this.state.links.youtube && <>
                      <Col xs={1}>
                        <a href={this.state.links.youtube} target='_blank'>
                          <YouTubeIcon style={styles.socialIcon} />
                        </a>
                      </Col>
                    </>}
                  </Row>
                </div>
              </Col>

              {/** User Songs List */}
              <Col xs={12} md={7} className="mb-1 p-0"
                style={{
                  overflow: 'hidden',
                  background: 'rgba(248, 248, 248, 0.5)',
                  boxShadow: '0 14px 28px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15)',
                  maxHeight: '55vh',
                  color: '#000'
                }}
              >
                {this.state.songs.length !== 0 ? (
                  <ProfileSongList songs={this.state.songs} email={this.state.email} userId={this.state.user._id} />
                ) : (
                    <div className='text-center' style={{ height: '50vh' }}>
                      <h2 className='pt-2'>No Songs Available</h2>
                    </div>
                  )}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={5} className='mb-1' style={{ height: '50vh', overflow: 'hidden' }}>
                <h2 style={styles.heading}>About</h2>
                <p style={{ height: '100%', overflow: 'auto' }}>{this.state.about}</p>
              </Col>
              <Col xs={12} md={7} className='mb-1' style={{ height: '70vh' }}>
                <h2 style={styles.heading}>Schedule a meeting</h2>
                <InlineWidget
                  // color="#00a2ff"
                  // text="Request a Tutorial Session"
                  // textColor="#ffffff"
                  url="https://calendly.com/museexchange"
                />
              </Col>
            </Row>
          </div>
        </main>
      </Container>
    </>)
  }
}
export default Profile;