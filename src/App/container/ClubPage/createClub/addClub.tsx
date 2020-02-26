import CreateClub from './createClub';
import React from 'react';
import './addClub.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

type propsType = {
  ContentState: {
    state: string;
    clubId: string;
  };
  handelContentPanel: Function;
};

const Addclub: React.FC<propsType> = props => {
  const handleCancleClick = () => {
    props.handelContentPanel('notClubPage', 'main');
  };
  return (
    <div className="content">
      <div className="addClub">
        <FontAwesomeIcon onClick={handleCancleClick} className="icon" icon={faLongArrowAltLeft} size="2x" />
        <h1 className="title">동호회 생성</h1>
        <CreateClub></CreateClub>
      </div>
    </div>
  );
};

export default Addclub;
