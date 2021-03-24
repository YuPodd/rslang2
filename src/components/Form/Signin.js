import { Form, Input, Button, Space} from "antd";
import { MailOutlined, LockOutlined} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export default function Signin(){
  const dispatch = useDispatch();
  const hide_signin = useCallback(() => {
    dispatch({type: "HIDE_SIGNIN"});
  }, []);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return(
    <Form
    name="signin"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <Form.Item
      name={['user', 'email']}
      rules={[
        {
          type: 'email',
          required: true,
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
    <Button type="danger" className="login-form-button" onClick={hide_signin}>
        Cancel
      </Button>
    <Button type="primary" htmlType="submit" className="login-form-button" onClick={hide_signin}>
        Sign In
      </Button>
    </Space>
    </Form.Item>
  </Form>
  )
}