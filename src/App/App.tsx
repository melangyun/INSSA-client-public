import React from 'react';
import Box from '@material-ui/core/Box';

import LogoPanel from './LogoPanel/LogoPanel';
import ContentsPanel from './ContentsPanel/ContentsPanel';
import DockPanel from './DockPanel/DockPanel';

import './App.css';

const App: React.FC = () => {
  const [content, setContent] = React.useState({ state: 'home', clubId: '' });
  //share, logout, login, mypage, join, home
  const handelContentPanel = (state: string, clickPoint: string): void => {
    // 홈페이지에 있을때는 clubId가 있어야하고, 없다면 clubId를 ''로 둘것임
    if (state === 'notClubPage') setContent({ state: clickPoint, clubId: '' });
    else if (state === 'ClubPage') setContent({ state: clickPoint, clubId: clickPoint });
  };

  return (
    <Box className="contentBox" boxShadow={3}>
      <LogoPanel></LogoPanel>
      <ContentsPanel ContentState={content} handelContentPanel={handelContentPanel}></ContentsPanel>
      <DockPanel handelContentPanel={handelContentPanel}></DockPanel>
    </Box>
  );
};

export default App;
