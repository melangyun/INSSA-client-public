import React from 'react';
import './Title.css';
import Skeleton from '@material-ui/lab/Skeleton';

const Title: React.FC = () => {
  return (
    <div className="Title">
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </div>
  );
};

export default Title;
