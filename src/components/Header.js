import { Link } from "react-router-dom";
import { useState } from 'react'
import { Form, Input, Button, Modal, Menu, Space} from "antd";
import "antd/dist/antd.css";
import { MailOutlined, UserOutlined, LockOutlined, BarChartOutlined, BookOutlined, PlayCircleOutlined } from "@ant-design/icons";

export default function Header() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
  
    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible1(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      setTimeout(() => {
        setVisible1(false);
      }, 100);
    };
    const handleOk2 = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible2(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel2 = () => {
      setTimeout(() => {
        setVisible2(false);
      }, 100);
    };

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

  return (
    <header>
      <Menu
        style={{ display: "flex", justifyContent: "space-around", boxShadow: "0 2px 8px #f0f1f2", fontSize: "16px",background: "#ffffffd9" }}
        mode="horizontal"
      >
        <Menu.Item key="main">
          <Link to="/mainPage"><h2 className="title">RS Lang</h2></Link>
        </Menu.Item>
        <Menu.Item key="study" icon={<BookOutlined />}>
          <Link to="/studyPage">Study</Link>
        </Menu.Item>
        <Menu.Item key="games"icon={<PlayCircleOutlined />}>
          <Link to="/gamesPage">Games</Link>
        </Menu.Item>
        <Menu.Item key="statistics" icon={<BarChartOutlined />}>
          <Link to="/statisticsPage">Statistics</Link>
        </Menu.Item>
        <Menu.Item key="auth" onClick={() => setVisible1(true)}>
        Sign In
        </Menu.Item>
        <Menu.Item key="auth" onClick={() => setVisible2(true)}>
        Sign Up
        </Menu.Item>

        <Modal //Signin
        title="Sign In"
        visible={visible1}
        closable={false}
        confirmLoading={confirmLoading}
        footer={null}
      >
        <Form
      name="normal_login"
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
      <Button type="danger" className="login-form-button" onClick={handleCancel}>
          Cancel
        </Button>
      <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
          Sign In
        </Button>
      </Space>
      </Form.Item>
    </Form>


      </Modal>
      <Modal //Sign Up
        title="Sign Up"
        visible={visible2}
        closable={false}
        confirmLoading={confirmLoading}
        footer={null}
      >
        <Form
      name="normal_login"
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
      <Button type="danger" className="login-form-button" onClick={handleCancel2}>
          Cancel
        </Button>
      <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk2}>
          Sign Up
        </Button>
      </Space>
      </Form.Item>
    </Form>
      </Modal>
      </Menu>
  </header>
  )
}
