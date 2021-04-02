import { Fragment} from "react";
import "../../../styles/sprint_styles.css";
import {CheckCircleTwoTone} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button } from "antd";

export default function Sprint() {

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
            <div className="check_marks">
              <CheckCircleTwoTone twoToneColor="#52c41a" />
              <CheckCircleTwoTone twoToneColor="#52c41a" />
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div>
          </section>
          <section className="words_section">
            <div className="words_wrapper">
              <div>Word</div>
              <div>Translation</div>
            </div>
          </section>
          <section className="buttons_section">
            <Button type="primary" id="button_ok">
              Верно
            </Button>
            <Button type="primary" danger id="button_wrong">
              Неверно
            </Button>
          </section>
        </section>
      </div>
    </Fragment>
  );
}
