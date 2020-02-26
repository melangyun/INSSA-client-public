import React from 'react';
import PagePanel from './PagePanel';

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};

const WholeClubPage: React.FC<propsType> = props => {
  return (
    <div className="wholeClubPage">
      <PagePanel changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}>
        {props.children}
      </PagePanel>
      <PagePanel changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}>
        {props.children + 'R'}
      </PagePanel>
    </div>
  );
};

export default WholeClubPage;
