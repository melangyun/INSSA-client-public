import React, { Fragment } from 'react';
import { Button } from 'antd';

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};
//client : 수정하기, 삭제 요청필요
const BoardDetail: React.FC<propsType> = props => {
  return (
    <Fragment>
      <h1>게시글 읽기</h1>
      <h3>작성자 : </h3>
      <p>게시 내용 게시 내용게시 내용게시 내용게시 내용게시 내용</p>
      <Button
        onClick={(): void => {
          props.changeBoardFunc('readBoard');
        }}
      >
        뒤로가기
      </Button>
      <Button type="primary">수정하기</Button>
      <Button type="danger">삭제</Button>
    </Fragment>
  );
};

export default BoardDetail;
