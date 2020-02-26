import React from 'react';
import {
  Form,
  Button,
  Tree
} from 'antd';
const { TreeNode, DirectoryTree } = Tree;

class MypageAntd extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} multiple defaultExpandAll>
        <Form.Item label="email">
          <span className="ant-form-text">chio6622@gmail.com</span>
        </Form.Item>
       <Form.Item label="비밀번호">
          <span>**********</span>
          <Button className="changePW">비민번호 변경</Button>
        </Form.Item>
        <Form.Item label="나의 취미">
          <DirectoryTree>
          <TreeNode title="hobbys" key="0-0">
            <TreeNode title="축구.exe" key="0-0-0" isLeaf />
            <TreeNode title="등산.exe" key="0-0-1" isLeaf />
          </TreeNode>
          </DirectoryTree>
        </Form.Item>

     

        <Form.Item label="내가 가입한 동호회">
        <DirectoryTree>
          <TreeNode title="clubs" key="0-0">
            <TreeNode title="너도 이제 손흥민!.exe" key="0-0-0" isLeaf />
            <TreeNode title="너도 이제 엄홍길!.exe" key="0-0-1" isLeaf />
          </TreeNode>
          </DirectoryTree>
        </Form.Item>


        <Form.Item label="주소">
         <DirectoryTree>
          <TreeNode title="인천시" key="0-0">
            <TreeNode title="부평구">
              <TreeNode title="부평동" key="0-0-1" isLeaf />
            </TreeNode>
          </TreeNode>
          </DirectoryTree>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            내 정보 변경
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'MypageAntd' })(MypageAntd);