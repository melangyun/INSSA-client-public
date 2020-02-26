import React from 'react';
import 'antd/dist/antd.css';
import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};

const CardList: React.FC<propsType> = props => {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={data}
      renderItem={item => (
        <List.Item
          onClick={(): void => {
            props.changeBoardFunc('readBoard');
          }}
        >
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
  );
};

export default CardList;
