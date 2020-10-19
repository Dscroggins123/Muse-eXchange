import React from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';
// Icons
import DeleteIcon from '@material-ui/icons/Delete';

const SongsTable = ({ songsList }) => {

  const deleteSong = () => {
    alert('song will be deleted')
  }

  return <>
    <Table responsive bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Artist</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {songsList.map((song, index) => <>
          <tr>
            <td>{(index + 1)}</td>
            <td>{song.author}</td>
            <td>{song.title}</td>
            <td>{song.genre}</td>
            <td>{song.price}</td>
            <td style={{border: '0px', color: '#747474'}}><DeleteIcon onClick={deleteSong}/></td>
          </tr>
        </>)}
      </tbody>
    </Table>
  </>
}

export default SongsTable;