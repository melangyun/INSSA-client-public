import React from 'react';
import 'antd/dist/antd.css';
import api from '../../../../hooks/api'
import {
  Form,
  Select,
  Slider,
  Button,
  Input,
} from 'antd';
import { async } from 'q';

const { Option } = Select;



class CreateClub extends React.Component {
  constructor(props){
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields( async(err, body) => {
      if (!err) {
        const url = {baseUrl:"http://localhost:8080"}
        const result = await api.clubs(url).post(body)
        console.log(result)
        console.log('Received values of form: ', body);
      }
    });
  };

  handleCheck = (e) =>{
    if(e.target.innerHTML === "<span>취소</span>"){
      this.props.handleCancleClick("")
      console.log("eeeee",e.target.innerHTML)
    }
  }
  handleCancleClick = () =>{
    
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="타이틀 입력" hasFeedback>
          {getFieldDecorator('name',{
            rules:[{required: true, message:'타이틀을 입력하세요!'}],
          })(
            <Input placeholder='타이틀을 입력하세요!'></Input>
          )}
        </Form.Item>

        <Form.Item label="동호회 소개" hasFeedback>
          {getFieldDecorator('description',{
            rules:[{required: true, message:'동호회 소개글을 작성하세요!'}],
          })(
            <Input placeholder='동호회 소개글을 입력 하세요!'></Input>
          )}
        </Form.Item>

        <Form.Item label="활동 지역" hasFeedback>
          {getFieldDecorator('field',{
            rules:[{required: true, message:'동호회 소개글을 작성하세요!'}],
          })(
            <Select placeholder='활동 지역을 선택 하세요!'>
              <Option value="인천" >인천</Option>
              <Option value="서울" >서울</Option>
              <Option value="경기" >경기</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="취미를 선택해 주세요" hasFeedback>
          {getFieldDecorator('hobbyId', {
            rules: [{ required: true, message: '동호회 취미를 선택해 주세요!' }],
          })(
            <Select placeholder="취미를 선택해 주세요!">
              <Option value="등산">등산</Option>
              <Option value="자전거">자전거</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="동호회 타입">
          {getFieldDecorator('type', {
            rules: [{ required: true, message: '동호회 타입을 선택 하세요!'}],
          })(
            <Select placeholder="동호회의 타입을 선택하세요">
              <Option value="현피">현피</Option>
              <Option value="등산">등산</Option>
              <Option value="술모임">술모임</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="인원 선택" hasFeedback>
          {getFieldDecorator('max',{
            rules:[{required: true, message: '인원을 설정 하세요!'}],
          })(
            <Slider
              marks={{
                0: '0',
                20: '20',
                40: '40',
                60: '60',
                80: '80',
                100: '100',
              }}
            />,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            생성
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'CreateClub' })(CreateClub);

          