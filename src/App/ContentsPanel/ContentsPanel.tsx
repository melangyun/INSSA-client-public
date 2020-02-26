import React from 'react';
import './ContentsPanel.css';
import Title from './Title/Title';
import ContentsViewr from './ContentsViewer/ContentsViewr';
import Join from './ContentsViewer/ContentsRender/Join';
import Login from './ContentsViewer/ContentsRender/Login';
import ClubPageViewer from '../container/ClubPage/ClubPageViewer';
// import MainPage from '../ContentsPanel/ContentsViewer/ContentsRender/MainPage';
import MyPage from '../ContentsPanel/ContentsViewer/ContentsRender/MyPage';
import AddClub from '../container/ClubPage/createClub/addClub';
import Search from '../ContentsPanel/ContentsViewer/ContentsRender/Search';
import SearchResult from '../ContentsPanel/ContentsViewer/ContentsRender/SearchResult';

type propsType = {
  ContentState: {
    state: string;
    clubId: string;
  };
  handelContentPanel: Function;
};

const ContentsPanel: React.FC<propsType> = props => {
  // const [clubClick, setClubClick] = React.useState('');
  // const handelClubClick = (clubId: string): void => {
  //   setClubClick(clubId);
  // };
  const { clubId, state } = props.ContentState;

  //share, logout, login, mypage, join, home
  // 기본이 홈페이지!
  let contentArea = <ContentsViewr handelContentPanel={props.handelContentPanel}></ContentsViewr>;

  if (state === 'join') contentArea = <Join></Join>;
  else if (state === 'login') contentArea = <Login handleContentPanel={props.handelContentPanel}></Login>;
  else if (clubId.length) contentArea = <ClubPageViewer></ClubPageViewer>;
  else if (state === 'mypage')
    contentArea = <MyPage ContentState={props.ContentState} handelContentPanel={props.handelContentPanel} />;
  else if (state === 'addclub')
    contentArea = <AddClub ContentState={props.ContentState} handelContentPanel={props.handelContentPanel} />;
  else if (state === 'search') contentArea = <Search handelContentPanel={props.handelContentPanel} />;
  else if (state === 'searchResult') contentArea = <SearchResult handelContentPanel={props.handelContentPanel} />;
  return (
    <div className="ContentsPanel">
      <Title></Title>
      {contentArea}
    </div>
  );
};

export default ContentsPanel;
