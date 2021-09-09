import { Link } from "react-router-dom";
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Menu } from "antd";
import { BarChartOutlined, BookOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { SHOW_SIGNUP, SHOW_SIGNIN, LOGOUT } from '../store/ActionTypes';
import Signup from './Form/SignupForm'
import Signin from './Form/SigninForm'
import "antd/dist/antd.css";

export default function Header() {
    const isSignupVisible = useSelector(state => state.isSignupVisible)
    const isSigninVisible = useSelector(state => state.isSigninVisible)
    const isAuth = useSelector(state => state.user.message === "Authenticated" ? true : false)

    const dispatch = useDispatch();

    const show_signup = useCallback(() => { dispatch({type: SHOW_SIGNUP})}, [dispatch]);
    const show_signin = useCallback(() => { dispatch({type: SHOW_SIGNIN})}, [dispatch]);

    const logout = useCallback(() => { dispatch({type: LOGOUT})}, [dispatch]);
  
  return (
    <header>
      <Menu
        style={{ display: "flex", justifyContent: "space-around", boxShadow: "0 2px 8px #f0f1f2", fontSize: "16px",background: "#ffffffd9" }}
        mode="horizontal"
      >
        <Menu.Item key="main">
          <Link to="/"><h2 className="title">RS Lang</h2></Link>
        </Menu.Item>
        <Menu.Item key="study" icon={<BookOutlined />}>
          <Link to="/study">Study</Link>
        </Menu.Item>
        <Menu.Item key="games"icon={<PlayCircleOutlined />}>
          <Link to="/games">Games</Link>
        </Menu.Item>
        <Menu.Item key="statistics" icon={<BarChartOutlined />}>
          <Link to="/statistics">Statistics</Link>
        </Menu.Item>
        
        {!isAuth && <Menu.Item key="signin" onClick={show_signin}>
        Sign In
        </Menu.Item>}
        {!isAuth && <Menu.Item key="signup" onClick={show_signup}>
        Sign Up
        </Menu.Item>}
        {isAuth && <Menu.Item key="logout" onClick={logout}>
        Logout
        </Menu.Item>}

      </Menu>

      <Modal //Signin
        title="Sign In"
        visible={isSigninVisible}
        closable={false}
        footer={null}
      >
        <Signin />
      </Modal>
      <Modal //Sign Up
        title="Sign Up"
        visible={isSignupVisible}
        closable={false}
        footer={null}
      >
        <Signup />
      </Modal>
  </header>
  )
}