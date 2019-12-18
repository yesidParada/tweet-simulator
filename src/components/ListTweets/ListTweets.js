import React from 'react';
import { Grid } from '@material-ui/core';
import Tweet from '../Tweet';
import './ListTweets.scss';

export default function ListTweets(props) {
  const {allTweet, deleteTweet} = props;
  if (!allTweet || allTweet.length === 0) {
    return (
      <div className="ListTweetsEmpty">
        <h2>... No hay Tweets ...</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={3} className="ListTweets">
      {allTweet.map((tweet, index) => [
        <Grid key={index} item xs={4}>
          <Tweet
            tweet={tweet}
            index={index}
            deleteTweet={deleteTweet}
          />
        </Grid>
      ])}
    </Grid>
  );
}