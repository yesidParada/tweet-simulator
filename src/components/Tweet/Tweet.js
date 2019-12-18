import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import moment from 'moment';
import './Tweet.scss';

export default function Tweet(props) {
  const{tweet:{
    name,
    tweet,
    time
  }, index, deleteTweet} = props;
  return(
    <Card className="Tweet">
      <CardContent>
        <div className="TweetHeader">
          <h5>{name}</h5>
          <DeleteTwoToneIcon onClick={() => deleteTweet(index)}/>
        </div>
        <p>{tweet}</p>
        <div className="TweetTime">
          {moment(time).format('DD/MM/YYYY HH:mm')}
        </div>
      </CardContent>
    </Card>
  );
}