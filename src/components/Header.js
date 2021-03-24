import { Link } from "react-router-dom";
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Menu } from "antd";
import "antd/dist/antd.css";
import { BarChartOutlined, BookOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Signup from './Form/Signup'
import Signin from './Form/Signin'
import {SHOW_SIGNUP, SHOW_SIGNIN} from '../store/ActionTypes';

export default function Header() {
    const isSignupVisible = useSelector(state => state.isSignupVisible)
    const isSigninVisible = useSelector(state => state.isSigninVisible)
    const dispatch = useDispatch();
    const show_signup = useCallback(() => {
      dispatch({type: SHOW_SIGNUP});
    }, []);
    const show_signin = useCallback(() => {
      dispatch({type: SHOW_SIGNIN});
    }, []);
  

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
        <Menu.Item key="signin" onClick={show_signin}>
        Sign In
        </Menu.Item>
        <Menu.Item key="signup" onClick={show_signup}>
        Sign Up
        </Menu.Item>
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