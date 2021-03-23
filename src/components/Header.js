import { Link } from "react-router-dom";
import { Menu, PageHeader } from "antd";
import "antd/dist/antd.css";
import { HomeOutlined, BarChartOutlined,BookOutlined, PlayCircleOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <header>
      <Menu
        style={{ display: "flex", justifyContent: "space-around", boxShadow: "0 2px 8px #f0f1f2", fontSize: "16px" }}
        mode="horizontal"
      >
        <Menu.Item key="main">
          <Link to="/mainPage"><h2 className="title">RS Lang</h2></Link>
        </Menu.Item>
        <Menu.Item key="study" icon={<BookOutlined />}>
          <Link to="/textbookPage">Study</Link>
        </Menu.Item>
        <Menu.Item key="games"icon={<PlayCircleOutlined />}>
          <Link to="/gamesPage">Games</Link>
        </Menu.Item>
        <Menu.Item key="statistics" icon={<BarChartOutlined />}>
          <Link to="/statisticsPage">Statistics</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
}
