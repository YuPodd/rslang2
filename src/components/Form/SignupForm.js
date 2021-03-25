import { Form, Input, Button, Space } from "antd";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";
import { HIDE_SIGNUP } from '../../store/ActionTypes'
import createUser from '../../actions/CreateUser'



export default function Signup(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const hide_signup = useCallback(() => { dispatch({type: HIDE_SIGNUP})}, [dispatch]);

  return(
    <Form name="signup" className="login-form" initialValues={{remember: true}} onFinish={createUser}>
        <Form.Item name='name' rules={[{required: true,message: 'Please input your Name!'}]}>
      <Input prefix={<UserOutlined className="site-form-item-icon" />} value={name} onChange={setName} placeholder="Name"/>
    </Form.Item>

    <Form.Item name='email' rules={[{ required: true, type: 'email', message: 'Please input your Email!'}]}>
      <Input prefix={<MailOutlined className="site-form-item-icon" />} value={email} onChange={setEmail} placeholder="Email"/>
    </Form.Item>

    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!'}, { min: 8, message: 'Password must be minimum 8 characters.' }]}>
      <Input prefix={<LockOutlined className="site-form-item-icon" />} value={password}  onChange={setPassword} type="password" placeholder="Password"/>
    </Form.Item>

    <Form.Item>
		<Space>
			<Button type="danger" className="login-form-button" onClick={hide_signup}>Cancel</Button>
			<Button type="primary" htmlType="submit" className="login-form-button" onClick={hide_signup}>Sign Up</Button>
		</Space>
    </Form.Item>
  </Form>
  )
}