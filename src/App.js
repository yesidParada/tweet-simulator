import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import ListTweets from './components/ListTweets'
import {TWEETS_STORAGE} from './utils/contants';

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })

  const [allTweet, setAllTweet] = useState([]);
  const [reloadTweet, setReloadTweet] = useState(false);

  useEffect(() => {
    const allTweetStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetArray = JSON.parse(allTweetStorage);
    setAllTweet(allTweetArray);
    setReloadTweet(false);
  }, [reloadTweet]);

  const deleteTweet = index => {
    allTweet.splice(index, 1);
    setAllTweet(allTweet);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweet));
    setReloadTweet(true);
  }

  return (
    <Container className="tweet-simulatos" maxWidth={ false }>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweet={allTweet}/>
      <ListTweets allTweet={allTweet} deleteTweet={deleteTweet}/>
      <Snackbar 
        anchorOrigin={{
          vertical: "top",
          horizontal:"right"
        }}
        open= {toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
