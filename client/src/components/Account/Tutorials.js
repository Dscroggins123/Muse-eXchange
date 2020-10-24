import React, {useState, useEffect} from 'react';
// Bootstrap
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
// Components
import TutorialsList from './TutorialsList';
// SVGs
import defaultProfilePic from '../../assets/svg/profile.svg';
// Api
import API from '../../utils/API';

const Tutorials = ({userId, tutorialIds, submit, setSubmit}) => {
  const [tutorialsList, setTutorialsList] = useState([]);
  useEffect(() => {
    setTutorialsList([]);
    if (tutorialIds) {
      tutorialIds.map(id => {
        API.getTutorialsByQuery(id)
          .then(res => {
            setTutorialsList(tutorialsList => [...tutorialsList, res.data[0]])
          }).then(() => {
            setTutorialsList(tutorialsList => {
              tutorialsList = tutorialsList.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)
              return tutorialsList;
            })
          })
          .catch(err => console.log(err))
      })
    }
  }, [tutorialIds])
  return <>
    {/* {console.log('tutorial ids', tutorialIds)}
    {console.log('tutorial list', tutorialsList)} */}
    <Container fluid className='mb-4'>
      <div className='tutorials-list mt-2'>
        <TutorialsList userId={userId} field='tutorial' tutorialsList={tutorialsList}  submit={submit} setSubmit={setSubmit}/>
      </div>
    </Container>
  </>
}

export default Tutorials;