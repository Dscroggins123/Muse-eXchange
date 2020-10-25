import React, { useState, useEffect } from 'react';
// Bootstrap
import { Container, ListGroup, Table } from 'react-bootstrap';
// Component
import SongPlayer from './SongPlayer';
// API
import API from '../../utils/API';
const PurchasedSongs = () => {
  /** ===== User Profile Info ====== */
  const [userId, setUserId] = useState();
  const [submit, setSubmit] = useState(1);

  // Profile 
  const [songs, setSongs] = useState('');
  const [purchaseSongs, setPurchaseSongs] = useState([]);
  const [songsList, setSongsList] = useState([]);
  const [songAuthor, setSongAuthor] = useState('');
  const [songTitle, setSongTitle] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = `Music eXchange | Songs`;
    if (localStorage.getItem("currentUser")) {
      const userObj = JSON.parse(localStorage.getItem("currentUser"));
      setUserId(JSON.parse(localStorage.getItem("currentUser")))
      setUserId(userObj._id)
    }
    // For demonstration purposes, we mock an API call.
    API.getSavedUsersById(userId).then((res) => {
      if (res.data) {
        setPurchaseSongs(res.data.profile.purchaseSongs);
        setSongs(res.data.profile.songs);
      }
      if (res.data.profile.purchaseSongs) {
        res.data.profile.purchaseSongs.map(songid => {
          API.getSongsByQuery(songid)
            .then(res => {
              setSongsList(songsList => [...songsList, res.data[0]])
            }).then(() => {
              // Sort songs list by date created
              setSongsList(songsList => {
                songsList = songsList.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)
                return songsList;
              })
            }).catch(err => console.log(err));
        })
      }
    }).catch(err => console.log(err));
  }, [submit, userId]);

  const [link, setLink] = useState('');

  const selectSong = e => {
    setLink(e.currentTarget.dataset.link);
    setSongAuthor(e.currentTarget.dataset.author);
    setSongTitle(e.currentTarget.dataset.title);
    
  }

  const [hover, setHover] = useState(false);
  const hoverTrue = () => {
    setHover(true);
  }

  const hoverFalse = () => {
    setHover(false);
  }
  const songInfoStyle = {
    fontWeight: 700
  }
  let listStyle;
  if (hover) {
    listStyle = {
      background: '#282828',
      outline: 'none',
      cursor: 'pointer'
    }
  } else {
    listStyle = {
      background: '#181818',
      outline: 'none',
      cursor: 'pointer'
    }
  }
  return <>
    {console.log('purchse songs page', songsList)}
    <Table responsive size="sm" className='mb-1 text-light'>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Title</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {songsList.map(song => <>
          {(typeof song !== 'undefined') && <>
            <tr data-link={song.file} data-author={song.author} data-title={song.title} onMouseEnter={hoverTrue} onMouseLeave={hoverFalse}
            style={listStyle} onClick={selectSong}>
              <td>{song.author}</td>
              <td>{song.title}</td>
              <td>{song.genre}</td>
            </tr>
          </>}
        </>)}
      </tbody>
    </Table>
    <Container fluid className='player-div d-flex justify-content-center' style={{ width: '100%', background: '#282828', position: 'fixed', bottom: 0 }}>
      <SongPlayer link={link} author={songAuthor} title={songTitle}/>
    </Container>
  </>
}

export default PurchasedSongs;