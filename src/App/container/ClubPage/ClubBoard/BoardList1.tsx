import React, { Fragment } from 'react';
import ListAntd from './ListAntd';

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};

const BoardList1: React.FC<propsType> = props => {
  return (
    <Fragment>
      <h2>중요공지</h2>
      <ListAntd changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></ListAntd>
      <h2>등록된 게시물</h2>
      <ListAntd changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></ListAntd>
    </Fragment>
  );
};

export default BoardList1;
