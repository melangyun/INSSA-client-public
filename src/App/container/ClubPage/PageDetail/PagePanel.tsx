import React, { Fragment } from 'react';
import './PageDetail.css';
import MainPageL from '../ClubMain/MainPage';
// import BoardList from '../ClubBoard/BoardList1';
import BoardMain from '../ClubBoard/BoardMain';
import BoardWrite from '../ClubBoard/BoardWrite';
import BoardList2 from '../ClubBoard/BoardList2';
import ListAntd from '../ClubBoard/ListAntd';
import BoardDetail from '../ClubBoard/BoardDetail';

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};

const PagePanel: React.FC<propsType> = props => {
  const { children, boardState } = props;
  const { writeBoard, readBoard } = boardState;

  let renderDiv;
  if (children === 'Main') {
    renderDiv = <MainPageL></MainPageL>;
  } else if (children === 'MainR') {
    renderDiv = <BoardList2 changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></BoardList2>;
  } else if (children === '게시판') {
    if (!writeBoard && !readBoard)
      renderDiv = <BoardMain changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></BoardMain>;
    else if (writeBoard && !readBoard)
      renderDiv = <BoardWrite changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></BoardWrite>;
    else if (readBoard)
      renderDiv = <BoardDetail changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></BoardDetail>;
  } else if (children === '게시판R') {
    if (!readBoard)
      renderDiv = <BoardList2 changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></BoardList2>;
    else renderDiv = <ListAntd changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></ListAntd>;
  } else if (children === '번개') {
    renderDiv = <BoardWrite changeBoardFunc={props.changeBoardFunc} boardState={props.boardState}></BoardWrite>;
  }

  return <div className="pagePanel">{renderDiv}</div>;
};

export default PagePanel;

/*
  동호회 페이지에서 필요한 컴포넌트 내용들
  1. 동호회 메인페이지
    1 - 1  좌측상단 : 동호회 이름, description
           좌측하단 : 다가올 번개리스트(가까운순)
    1 - 2 우측 : 게시글 리스트(최근 한달)

  2. 게시판
    2 - 1 좌측 상단 : 새로운 글 쓰기 버튼
          좌측 하단 : 동호회 소개<h1>
                     동호회 명, 동호회 설명
    2 - 2 우측 상단 : 중요공지 title, 작성자
          우측 하단 : 일반글

  3. 게시글 디테일
    3 - 1 좌측 : 상세글<h1>, 제목, 작성자, 작성 내용, 수정
    3 - 2 우측 : 댓글 리스트(없는경우 없다고 표기가 필요함) 수정, 삭제버튼도 필요,
                 가장 하단에 댓글 작성칸,버튼 필요


  추후 작성

  3. 동호회 번개 리스트
    3 - 1  좌측 상단 : 새로운 번개 만들기 버튼
           좌측 하단 : 다가올 번개리스트(가까운순)
    3 - 2  우측 : 지난 모임 - 한달치
  4. 번개 티테일
    4 - 1 좌측 상단 :
 */
