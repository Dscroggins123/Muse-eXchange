import React from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';
// Icons
import DeleteIcon from '@material-ui/icons/Delete';

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
          <th>Added</th>
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
            <td>
              {`
                ${months[(new Date(song.created_at).getMonth())]}
                ${(new Date(song.created_at)).getDate()},
                ${(new Date(song.created_at)).getFullYear()}
              `}
            </td>
            {console.log(new Date(song.created_at))}
            {}
            <td style={{border: '0px', color: '#747474'}}><DeleteIcon onClick={deleteSong}/></td>
          </tr>
        </>)}
      </tbody>
    </Table>
  </>
}

export default SongsTable;