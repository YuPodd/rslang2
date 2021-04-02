import { listOfGames } from "../../constants/constants";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Savanna from "./games/Savanna";
import AudioCall from "./games/AudioCall";
import Sprint from "./games/Sprint";
import OurGame from "./games/OurGame";

import { useState } from "react";

export default function GamesPage() {
  const { path, url } = useRouteMatch();
  const games = listOfGames.map((game) => {
    const location = {
      pathname: `${url}/${game.name}`,
      state: { from: "GamesPage" },
    };

    return (
      <div
        className="games_div animate__animated animate__backInLeft"
        id={game.name}
        key={game.name}
      >
        <Link to={location}>
          {game.name}
          <br />
          {game.icon}
        </Link>
      </div>
    );
  });

  return (
    <Switch>
      <Route path={path} exact>
        <div className="games_wrapper">{games}</div>
      </Route>
      <Route path={`${path}/Саванна`} component={Savanna} />
      <Route path={`${path}/Аудиовызов`} component={AudioCall} />
      <Route path={`${path}/Спринт`} component={Sprint} />
      <Route path={`${path}/Своя игра`} component={OurGame} />
    </Switch>
  );
}
