import "animate.css/animate.css";
import { Link, Switch, useRouteMatch, Route} from "react-router-dom";
import {numberOfUnits} from "../../constants/constants"
import Unit from './Unit'

export default function StudyPage() {
  const { path, url } = useRouteMatch();
  // const unitRoute = numberOfUnits.map((number) => {
  //   return (
      
  //   )
  // });
  const unit = numberOfUnits.map((number) => {
    return (
      <div
        className="unit_div animate__animated animate__backInLeft"
        id={number}
        key={number}
        >
        <Link to={`${url}/unit-${number}`}>Unit {number}</Link>
      </div>
    );
  });

  return (
    <Switch>
      <Route path={path} exact>
        <div className="study_wrapper">
          <div className="units_wrapper">{unit}</div>
        </div>
      </Route>
      <Route path={`${path}/unit-:number`} component={Unit}/>
    </Switch>

  );
}
