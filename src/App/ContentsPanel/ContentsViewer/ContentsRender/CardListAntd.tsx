import React from 'react';
import 'antd/dist/antd.css';
import { List, Card } from 'antd';

type propsType = {
  handelClubClick: Function;
};

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

const CardListAntd: React.FC<propsType> = props => {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={data}
      renderItem={item => (
        <List.Item
          onClick={() => {
            props.handelClubClick('ClubPage', 'clubId');
          }}
        >
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
  );
};

export default CardListAntd;
