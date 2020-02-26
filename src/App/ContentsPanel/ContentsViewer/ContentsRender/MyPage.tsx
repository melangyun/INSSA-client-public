import React from 'react';
import MypageAntd from './MypageAntd';
import './ContentsRender.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

type propsType = {
  ContentState: {
    state: string;
    clubId: string;
  };
  handelContentPanel: Function;
};

const MyPage: React.FC<propsType> = props => {
  const handleCancleClick = (): void => {
    props.handelContentPanel('notClubPage', 'main');
  };
  return (
    <div className="content">
      <div className="mypage">
        <FontAwesomeIcon onClick={handleCancleClick} className="icon" icon={faLongArrowAltLeft} size="2x" />
        <h1 className="title">마이페이지</h1>
        <MypageAntd></MypageAntd>
      </div>
    </div>
  );
};

export default MyPage;
