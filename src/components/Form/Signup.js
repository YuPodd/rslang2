import { Form, Input, Button, Space} from "antd";
import { MailOutlined, UserOutlined, LockOutlined} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export default function Signup(){
  const dispatch = useDispatch();
  const hide_signup = useCallback(() => {
    dispatch({type: "HIDE_SIGNUP"});
  }, []);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return(
    <Form
    name="signup"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
          <Form.Item
      name={['user', 'name']}
      rules={[
        {
          required: true,
          message: 'Please input your Name!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name"/>
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      rules={[
        {
          required: true,
          type: 'email',
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email"/>
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
    <Space>
    <Button type="danger" className="login-form-button" onClick={hide_signup}>
        Cancel
      </Button>
    <Button type="primary" htmlType="submit" className="login-form-button" onClick={hide_signup}>
        Sign Up
      </Button>
    </Space>
    </Form.Item>
  </Form>
  )
}