import React, { Fragment } from 'react';
import ListAntd from '../ClubPage/ClubBoard/ListAntd';

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};

const MainPage: React.FC<propsType> = props => {
  return (
    <Fragment>
      <h1>Main Page</h1>
      <hr />
      <ListAntd changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></ListAntd>
    </Fragment>
  );
};

export default MainPage;
