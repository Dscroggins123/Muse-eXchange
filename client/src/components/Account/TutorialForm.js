import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';

function TutorialForm({ getValue, values }) {

  const [product, setProduct] = useState('');

  useEffect(() => {
    setProduct(values.selectField)
  }, [values])

  const productChange = (event) => {
    setProduct(event.target.value)
    const { name, value } = event.target
    getValue({ ...values, [name]: value })
    // console.log(product)
  }

  const inputChange = (e) => {
    const { name, value } = e.target
    console.log(value)
    console.log(name);
    getValue({ ...values, [name]: value })
  }

  /** ====== Upload file from file input ===== */
  const uploadFileState = e => {
    const files = e.target.files;
    getValue({ ...values, files });
  }

  return (
    <Form>
      <div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Tutorial Type:</Form.Label>
          <Form.Control as="select" name="tutorialtype" onChange={inputChange} style={{ textAlign: 'left' }}>
            <option value='Guitar'>Guitar</option>
            <option value='Drums'>Drums</option>
            <option value='Bass'>Jazz</option>
            <option value='Keyboard'>Keyboard</option>
            <option value='Beats'>Beats</option>
            <option value='Trumpet'>Trumpet</option>
            <option value='Saxophone'>Saxophone</option>
            <option value='Violin'>Violin</option>
            <option value='Cello'>Cello</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="tutorialtitle" onChange={inputChange} style={{ textAlign: 'left' }} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Link:</Form.Label>
          <Form.Control type="text" placeholder="Enter video link" name="tutoriallink" onChange={inputChange} style={{ textAlign: 'left' }} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Price:</Form.Label>
          <Form.Control placeholder="Enter amount" type='number' name="tutorialprice" onChange={inputChange} style={{ textAlign: 'left' }} />
        </Form.Group>

      </div>
    </Form>
  )

}

export default TutorialForm;