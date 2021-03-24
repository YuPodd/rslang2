import "animate.css/animate.css";
import { Link } from "react-router-dom";
import {numberOfUnits} from "../../constants/constants"

export default function StudyPage() {
   
  const unit = numberOfUnits.map((number) => {
    return (
      <div
        className="unit_div animate__animated animate__backInLeft"
        id={number}
        key={number}
      >
        <Link to={`/unit${number}`}>Unit {number}</Link>
      </div>
    );
  });

  return (
    
    <div className="study_wrapper">
      <div className="units_wrapper">{unit}</div>
    </div>
  );
}
