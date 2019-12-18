import React, { useState } from 'react';
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import './FromSendTweet.scss';

export default function  FromSendTweet(props) {
  const {SendTweet} = props;

  const [formValue, sendFormValue] = useState({
    name: "",
    tweet: ""
  })

  const onFormChange = e => {
    sendFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }
  return(
    <div className="FromSendTweet">
      <h2 className="FromSendTweetTitle"> Enviar Tweet</h2>
      <form
        className="FromSendTweetForm"
        onSubmit={(e) => SendTweet(e, formValue)}
        onChange={onFormChange}  
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="FromSendTweetFormName"
              type="text"
              name="name"
              placeholder="Nombre de Usuario"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="FromSendTweetFormTextArea"
              name="tweet"
              multiline
              rows="6"
              placeholder="Escribe tu tweet"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Enviar Tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}