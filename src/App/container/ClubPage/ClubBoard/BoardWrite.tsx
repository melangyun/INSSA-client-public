import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Select, InputNumber, Button } from 'antd';

const { Group, TextArea } = Input;
const { Option } = Select;

type propsType = {
  changeBoardFunc: Function;
  boardState: {
    writeBoard: boolean;
    readBoard: boolean;
  };
};
// 등록 버튼 클릭시 요청 필요
const BoardWrite: React.FC<propsType> = props => {
  return (
    <Fragment>
      <h1>게시글 작성</h1>
      <Group compact>
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
          <Option value="Option2">Option2</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="input content" />
        <InputNumber />
      </Group>
      <br />
      <h3>작성자</h3>
      <br />
      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{ minRows: 6, maxRows: 10 }}
      />
      <Button type="primary">등록</Button>
      <Button
        onClick={(): void => {
          props.changeBoardFunc('writeBoard');
        }}
      >
        취소
      </Button>
    </Fragment>
  );
};

export default BoardWrite;
