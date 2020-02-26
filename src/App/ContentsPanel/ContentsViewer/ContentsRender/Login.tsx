import React from 'react';
import LoginAntd from './LoginAntd';
import Asd from './Asd';

type propsType = {
  handleContentPanel: Function;
};

const Join: React.FC<propsType> = props => {
  return (
    <div className="content">
      <div className="login">
        <h1 className="h1Login">로그인</h1>
        {Asd(props.handleContentPanel)}
        {/* <LoginAntd handleContentPanel={props.handleContentPanel}></LoginAntd> */}
      </div>
    </div>
  );
};

export default Join;
