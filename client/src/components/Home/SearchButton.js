import React, { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import API from '../../utils/API';

const SearchButton = () => {

  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);
  const history = useHistory();
  const inputRef = useRef();

  useEffect(() => {
    runSearch()
  }, []);

  const runSearch = () => {
    API.getSavedUsers()
      .then(res => {
        setResult(res.data)

        console.log(res)
      })
      .catch(err => console.log(err))
  };

  const handleInputChange = event => {
    const { value } = event.target
    setSearch(value);
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    const filterSearch = result.filter(user => user.username === search)

    if (filterSearch.length === 0) {
      console.log("No entries Found")
    } else {
      history.push(`/profile/${filterSearch[0].username}`)
      inputRef.current.value = "";
    }
  }
  
  return <>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" list="data" onChange={handleInputChange} ref={inputRef} style={{ fontFamily: 'Kumbh Sans, sans-serif' }} />

      <datalist id="data">
        {result.map(item =>
          <option key={item._id} value={item.username} />
        )}
      </datalist>

      <Button variant="none" style={{ background: "#FE064C", color: "#fff", fontFamily: 'Kumbh Sans, sans-serif' }} onClick={handleFormSubmit}>Search</Button>

    </Form>
  </>

}

export default SearchButton;