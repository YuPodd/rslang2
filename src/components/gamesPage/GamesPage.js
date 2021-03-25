import { listOfGames } from "../../constants/constants";
import { Link } from "react-router-dom";
import {DingtalkOutlined, CustomerServiceOutlined, DashboardOutlined } from "@ant-design/icons";

export default function GamesPage() {
    
        const games = listOfGames.map((game) => {
            return (
              <div
                className="unit_div animate__animated animate__backInLeft"
                id={game.name}
                key={game.name}
              >
                <Link to={`/games/${game.name}`}>{game.name}<br/>{game.icon}</Link>
              </div>
            );
          });
        
          return (
            <div className="study_wrapper">
              <div className="units_wrapper">{games}</div>
            </div>
          );
}