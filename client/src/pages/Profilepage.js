import React, { Component } from 'react';
// Bootstrap
import { Container, Row, Col, Image, Jumbotron, ListGroup } from 'react-bootstrap';
// Components
import ProfilePic from '../components/ProfilePic';
import PurchaseBtn from "../components/PurchaseBtn";
import ProfileSongList from '../components/ProfileSongList';
import API from '../utils/API';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Favorite from "@material-ui/icons/Favorite";
import EventIcon from '@material-ui/icons/Event';
import { Button } from "@material-ui/core"
import GridContainer from "../components/Profile/Grid/GridContainer";
import GridItem from "../components/Profile/Grid/GridItem";
import NavPills from "../components/Profile/NavPills/NavPills";
import { InlineWidget } from "react-calendly"
// import Calendly from "../components/Calendly/Calendly"
/** ===== Music Player ===== */
import MusicPlayer from '../components/Music/MusicPlayer';
import SmallPlayer from '../components/Music/SmallPlayer';

import musicIcon from '../assets/svg/music.png';
import songIcon from '../assets/svg/song.png'
import songSVG from '../assets/svg/song.svg';

// Wallpaper
import profileWallpaper from '../assets/images/profile-wallpaper.svg';

const styles = {
  jumbotron: {
    // backgroundImage: `url(${this.state.profilePic})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '50vh',
    border: '0px',
    backgroundColor: 'transparent',
    height: '100%',
    filter: 'blur(8px)',
    WebkitFilter: 'blur(8px)'
  }
}

class Profile extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    profilePic: "",
    songs: [],
    songInfo: [],
    tutorials: [],
    tutorialInfo: [],
    user: [],
    purchaseSongs: [],
    purchaseSongsInfo: [],
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
          profilePic: res.data.profile.profilePic,
          username: res.data.username,
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
            profilePic: res.data.profile.profilePic,
            purchaseSongs: res.data.profile.purchaseSongs
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
      <Container fluid style={{ paddingRight: '0px', paddingLeft: '0px', background: '#fff' }}>
        <main className="profile-page" >
          <section className="relative py-10 pt-0">
            <div className="container mx-auto" 
              style={{ 
                marginTop: "0px", 
                position: 'relative',
                bottom: '120px',
                backgroundColor: 'transparent',
                boxShadow: '0px 0px'
              }}>
              <Row style={{background: 'transparent'}}>
                {/** User Profile Pic */}
                <Col xs={12} md={5} className='p-0'
                  style={{
                  background: 'transparent',
                  height: '50vh'}}>
                  <div style={{width: '20rem'}}>
                    <ProfilePic
                      profilePic={this.state.profilePic}
                    />
                  </div>
                  <div>
                    <h3>{this.state.firstName} {this.state.lastName}</h3>
                  </div>
                </Col>

                {/** User Songs List */}
                <Col xs={12} md={7} className="p-0 border" 
                  style={{ 
                    overflow:'hidden' ,
                    background: 'transparent',
                    boxShadow:'0 14px 28px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15)',
                    height: '50vh'
                  }}
                >
                  {this.state.songs.length !== 0 ? (
                    <ProfileSongList songs={this.state.songs} email={this.state.email} userId={this.state.user._id} />
                  ) : (
                    <div className='text-center h-100' style={{background: 'rgba(228, 228, 228, 0.9)'}}>
                      <h2 className='pt-2'>No Songs Available</h2>
                    </div>
                  )}
                  
                </Col>
              </Row>
          
              <div className="text-center mt-3">
                <h3 className="text-4xl font-semibold leading-normal text-gray-800">{this.state.email}'s Song List</h3>
                <div className="text-sm leading-normal text-gray-500 font-bold uppercase">
                  <h5>Contact: {this.state.email}</h5>
                </div>
                <div className="mt-4 text-gray-700">
                  {this.state.songs
                    ? <div>
                    </div>
                    : <div className="text-gray-700">
                      <p>Here's a list</p>
                    </div>}
                </div>
                <div className="mt-10 py-2 border-t border-gray-300 text-center"></div>
                <div className="flex flex-wrap justify-center" style={{ marginBottom: "5%" }}>
                  <GridItem xs={12} sm={12} md={8}>
                    <NavPills
                      alignCenter
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Songs",
                          tabIcon: PlayCircleOutlineIcon,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem className="pt-0 pb-0">
                                <ul class="list-group" style={{ borderRadius: "0px" }}>
                                  {console.log(this.state.songs)}
                                  {this.state.songs.map((song) =>
                                    <li class="list-group-item d-flex justify-content-between">
                                      <Row className='w-100'>
                                        <Col xs={2} className="pb-0 pt-0">
                                          <Image src={songSVG} fluid style={{ width: "100%" }} />
                                        </Col>
                                        <Col xs={7}>
                                          <SmallPlayer song={song} />
                                        </Col>
                                        <Col className="p-0">
                                          <div>
                                            <div className="text-left">Song: {song.title}</div>
                                            <div className="text-left">Artist: {song.author}</div>
                                            <PurchaseBtn selleremail={this.state.email} title={song.title} price={song.price} id={song._id} currentuser={this.state.user._id} />
                                          </div>
                                        </Col>
                                      </Row>
                                    </li>
                                  )}
                                </ul>
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Tutorials",
                          tabIcon: VideoLibraryIcon,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem>
                                <ul class="list-group" style={{ borderRadius: "0px" }}>
                                  {this.state.tutorials.map((tutorial) =>

                                    <li class="list-group-item d-flex justify-content-between"><span>{tutorial.title}</span> <PurchaseBtn selleremail={this.state.email} title={tutorial.title} price={tutorial.price} id={tutorial._id} currentuser={this.state.user._id} /></li>
                                  )}
                                </ul>
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Favorite",
                          tabIcon: Favorite,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem>
                                <MusicPlayer songs={this.state.purchaseSongs} />
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Tutorial Session",
                          tabIcon: EventIcon,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem>
                                <InlineWidget
                                  color="#00a2ff"
                                  text="Request a Tutorial Session"
                                  textColor="#ffffff"
                                  url="https://calendly.com/museexchange"
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Container>
    </>)
  }
}
export default Profile;