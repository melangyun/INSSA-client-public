import React, { Fragment } from 'react';
import CardList from './CardList';

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};

const ReplyPage: React.FC<propsType> = props => {
  return (
    <Fragment>
      <h2>중요공지</h2>
      <CardList changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></CardList>
      <h2>등록된 게시물</h2>
      <CardList changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></CardList>
    </Fragment>
  );
};

export default ReplyPage;
