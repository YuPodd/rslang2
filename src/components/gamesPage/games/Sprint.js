import { Fragment } from "react";
import "../../../styles/sprint_styles.css";

export default function Savanna() {
  return (
    <Fragment>
      <div>Спринт</div>
      <div>Timer</div>
      <div className="game_container">
        <section className="points_section">
          <div>Points</div>
        </section>
        <section className="learn_section">
          <section className="check_marks_section">
            Галочки
            <div className="check_marks"></div>
          </section>
          <section className="words_section">
            <div className="words_wrapper">
              <div>Word</div>
              <div>Translation</div>
            </div>
          </section>
          <section className="buttons_container">
            <button>Верно</button>
            <button>Неверно</button>
          </section>
        </section>
      </div>
    </Fragment>
  );
}
