import React, { useState, useEffect } from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';
// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
// Components
import ProductModal from './ProductModal';
import SongModal from './SongModal';
import PlayButton from '../MediaPlayer/PlayButton';
// API
import API from '../../utils/API';
import { Media, Player, controls, utils } from 'react-media-player'


const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

const SongsTable = ({ userId, songsList, submit, setSubmit }) => {

  // Product Modal
  const [show, setShow] = useState(false);
  const [songs, setSongs] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setSongs(songsList);
  }, [songsList])

  const deleteSong = e => {
    let songId = e.currentTarget.dataset.id;
    // alert('song will be deleted')
    API.removeSong(userId, songId);
    setSubmit(submit + 1);
  }

  return <>
    {/* {console.log(songsList)} */}
    <div className='m-2 p-2'>
      <a href="#" onClick={handleShow} style={{ color: '#1877FF', cursor: 'pointer', textDecoration: 'none' }}>
        <AddIcon /> Add song
      </a>
    </div>
    <Table responsive bordered size="sm" className='mb-1'>
      <thead>
        <tr>
          <th style={{border: '0px'}}></th>
          <th>#</th>
          <th>Artist</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Price</th>
          <th>Added</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => <>
          <tr style={{background: '#F8F8F8'}}>
            <td style={{border: '0px', background: '#fff', width: '20px'}}>
              <Media>
                <div className="media">
                  <div className="media-player">
                    <Player src={song.file} style={{display: 'none'}} />
                    <div className="media-controls">
                      <PlayButton style={{outline: 'none', color: '#747474'}}/>
                    </div>
                  </div>
                </div>
              </Media>
            </td>
            <td>{(index + 1)}</td>
            <td>{song.author}</td>
            <td>{song.title}</td>
            <td>{song.genre}</td>
            <td>{song.price}</td>
            <td>
              {`
                ${months[(new Date(song.created_at).getMonth())]}
                ${(new Date(song.created_at)).getDate()},
                ${(new Date(song.created_at)).getFullYear()}
              `}
            </td>
            {/* {console.log(new Date(song.created_at))} */}
            {}
            <td style={{ border: '0px', color: '#747474', background: '#fff' }}>
              <a href="#" data-id={song._id} onClick={deleteSong}>
                <DeleteIcon style={{ cursor: 'pointer', color: '#747474' }} />
              </a>
            </td>
          </tr>
        </>)}
      </tbody>
    </Table>
    <SongModal field={'song'} state={show} open={handleShow} close={handleClose} submit={submit} setSubmit={setSubmit} />
  </>
}

export default SongsTable;