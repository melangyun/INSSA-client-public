import React from 'react';
import './MainIconTray.css';
import { faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
// import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
// import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

type propsType = {
  handelContentPanel: Function;
};

const MainIconTray: React.FC<propsType> = props => {
  const handleClick = (key: string): any => {
    props.handelContentPanel('notClubPage', key);
  };
  return (
    <div className="MainIconTray">
      <div className="margin"></div>
      {/* <FontAwesomeIcon className="icon" icon={faBars} size="2x" />
      <br />
      <FontAwesomeIcon className="icon" icon={faBell} size="2x" />
      <br />
      <FontAwesomeIcon className="icon" icon={faComments} size="2x" />
      <br /> */}
      <span
        onClick={() => {
          handleClick('addclub');
        }}
      >
        <FontAwesomeIcon className="icon" icon={faPlusCircle} size="2x" />
      </span>
      <br />
      <span
        onClick={() => {
          handleClick('search');
        }}
      >
        <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
      </span>
      {/* <ReorderOutlinedIcon fontSize="large"></ReorderOutlinedIcon> <br />
      <NotificationsNoneOutlinedIcon fontSize="large"></NotificationsNoneOutlinedIcon> <br />
      <SmsOutlinedIcon fontSize="large"></SmsOutlinedIcon> */}
    </div>
  );
};

export default MainIconTray;
