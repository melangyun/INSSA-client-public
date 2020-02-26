import React from 'react';
import './DockPanel.css';
import MainIconTray from './MainIconTray/MainIconTray';
import SubIconTray from './SubIconTray/SubIconTray';

type propsType = {
  handelContentPanel: Function;
};

const DockPanel: React.FC<propsType> = props => {
  return (
    <div style={{ position: 'absolute', right: 0, height: '100%', width: 80 }}>
      <div className="DockPanel">
        <MainIconTray handelContentPanel={props.handelContentPanel}></MainIconTray>
        <SubIconTray handelContentPanel={props.handelContentPanel}></SubIconTray>
      </div>
    </div>
  );
};

export default DockPanel;
