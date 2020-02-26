import React, { Fragment } from 'react';
import { Button } from 'antd';

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};

const BoardMain: React.FC<propsType> = props => {
  const writeNewBoardFun = (btnType: string): any => {
    props.changeBoardFunc(btnType);
  };

  return (
    <Fragment>
      <Button
        type="primary"
        onClick={(): void => {
          writeNewBoardFun('writeBoard');
        }}
      >
        새로운 게시글 작성
      </Button>
      <h2 className="subtitle">우리 모임 소개</h2>
      <p className="description">우리는 스킨스쿠버로 하나되는 사이조은 동호회~ 다들 마니마니 가입해주세효</p>
    </Fragment>
  );
};

export default BoardMain;
