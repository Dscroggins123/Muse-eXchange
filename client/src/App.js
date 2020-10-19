import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../src/pages/Home';
import LandingPage from '../src/pages/LandingPage';
import NoMatch from "../src/pages/NoMatch";
import UserProfile from './pages/UserProfile';
import AccountPage from './pages/AccountsPage';
import AccountPage_Demo from './pages/AccountsPage_Demo';
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Profilepage from "./pages/Profilepage"
import Payment from "./pages/Payment"
import Team from './pages/Team';
import AddSong from './pages/AddSong';
import API from './utils/API';
// import './App.css';import API from '../../utils/API';

function App() {
  const [user, setUser] = useState();
  const [pending, setPending] = useState(true)
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUser(JSON.parse(localStorage.getItem("currentUser")));

    }
    setPending(false)
  }, [])

  const handleSetCurrentUser = user => {
    console.log(user)
    setUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  const handleLogout = () => {
    handleSetCurrentUser(null)
  }

  // console.log(user)

  // AddPurchasedSongs = (songid, songid) => {
  //   API.AddPurchasedSongs
  // }

  return (
    <Router>
      {/* {!user ? <h1></h1> : <Navbar handleLogout={handleLogout} user={user._id} />} */}
      {user && <Redirect to="/" />}
      <Switch>
        {/* <Route exact path="/" component={() => <LandingPage pending={pending} user={user}/>} /> */}
        <Route exact path="/" component={() => <Home pending={pending} user={user} />} />
        {/* <Route exact path="/">
            {!user ? <h1>Is Loading...</h1> : <Home />}
          </Route> */}
        {/* <Route path="/profile/:username" render={(props) => <Profile {...props} />}/> */}
        <Route path="/profile/:username" render={(props) => <Profilepage {...props} />} />
        <Route path="/account" component={() => <AccountPage />} />
        {/* <Route path="/account" component={() => <UserProfile />} /> */}
        <Route path="/auth" component={() => <Login handleSetCurrentUser={handleSetCurrentUser} />} />
        <Route path="/pages/Payment/:title/:price/:id" component={Payment} />
        <Route path="/team">
          <Team user={user} />
        </Route>
        <Route path="/addsong" component={AddSong} />
        <Route component={() => <Login handleSetCurrentUser={handleSetCurrentUser} />} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
