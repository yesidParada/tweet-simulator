import React from 'react';
import Twitterlogo from '../../assets/img/twitter-logo.png'
import './Header.scss';

export default function Header(){
  return(
    <div className="header">
      <img src={ Twitterlogo } alt="tweets simulator"/>
      <h1>Tweets Simulator</h1>
    </div>
  );
}
