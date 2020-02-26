import React from 'react';
import './LogoPanel.css';
// import { faBattleNet } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogoPanel: React.FC = () => {
  return (
    <div className="LogoPanel">
      {/* <img
        alt=""
        src="https://www.freelogodesign.org/file/app/client/thumb/dbd80ecf-5511-4c5d-b071-15870bac589e_200x200.png?1579669347719"
        style={{ width: 56, height: 56, margin: 12, color: '#4c6ef5' }}
      /> */}
      <img
        alt=""
        src="https://lh3.google.com/u/0/d/1vdD34WFZRMVlOjvTPNsvoVfHJ8NujcoF=w2495-h1433-iv3"
        style={{ width: 56, margin: 12, marginTop: -12 }}
      />
    </div>
  );
};

export default LogoPanel;
