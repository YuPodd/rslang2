import { Fragment } from "react";
import '../../../styles/sprint_styles.css'

export default function Savanna() {
  return (
    <Fragment>
      <div>Спринт</div>
      <div>Timer</div>
      <div className="game_wrapper">
        <div className="points_container">
          <div>Points</div>
        </div>
        <div className="game_container">
          <div className="check_marks_container">
            Галочки
            <div className="check_marks"></div>
          </div>
          <div className="words_container">
          <div>Word</div>
          <div>Translation</div>
          </div>
             <div className="buttons_container">
            <button>Верно</button>
            <button>Неверно</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
