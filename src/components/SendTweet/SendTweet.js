/* eslint-disable no-const-assign */
import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FromSendTweet from './../FromSendTweet';
import moment from 'moment';
import ModalContainer from '../ModalContainer';
import { TWEETS_STORAGE } from '../../utils/contants'
import './SendTweet.scss';

export default function SendTweet(props){
  const {setToastProps, allTweet} = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const openModal = () =>{
    setIsOpenModal(true);
  }

  const closeModal = () =>{
    setIsOpenModal(false);
  }

  const SendTweet = (e, formValue) =>{
    e.preventDefault();
    
    const { name, tweet } = formValue;

    let allTweetArray = [];

    if(allTweet) {
      allTweetArray = allTweet;
    }

    if (!name || !tweet) {
      setToastProps({
        open: true,
        text: 'WARNING: Campos vacios'
      });
    } else {
      formValue.time = moment();
      allTweetArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetArray));
      setToastProps({
        open: true,
        text: 'tweet enviado ...'
      });
      closeModal();
    }
    allTweetArray = [];
  }
  
  return(
    <div className="SendTweet">
      <Fab
        className="SendTweetOpenModal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FromSendTweet SendTweet={SendTweet} />
      </ModalContainer>
    </div>
  );
}