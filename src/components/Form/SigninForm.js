import { Form, Input, Button, Space} from "antd";
import { MailOutlined, LockOutlined} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";
import LoginUser from '../../actions/LoginUser'
import { HIDE_SIGNIN, LOGIN_USER } from '../../store/ActionTypes'

export default function Signin(){
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const hideSignin = useCallback(() => { dispatch({type: HIDE_SIGNIN})}, [dispatch]);

	const saveUser = useCallback((user) => { dispatch({type: LOGIN_USER, user : user})}, [dispatch]);

	const handleFinish = async (data) =>{
		console.log(data)
		const user = await LoginUser(data);
		if(user){
			saveUser(user)
		}else{
			alert('Auth error')
		}
		hideSignin()

	}

  return(
    <Form name="signin" className="login-form" initialValues={{ remember: true }} onFinish={handleFinish} >
		<Form.Item name='email' rules={[{ type: 'email', required: true, message: 'Please input your Email!'}]}>
			<Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email" onChange={setEmail} value={email}/>
		</Form.Item>

		<Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!'},{ min: 8, message: 'Password must be minimum 8 characters.' }]}>
			<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" onChange={setPassword} value={password}/>
		</Form.Item>

		<Form.Item>
			<Space>
				<Button type="danger" className="login-form-button" onClick={hideSignin}>Cancel</Button>
				<Button type="primary" htmlType="submit" className="login-form-button" >Sign In</Button>
			</Space>
		</Form.Item>
	</Form>
  )
}