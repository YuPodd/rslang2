import { Fragment } from "react";
import "../../../styles/sprint_styles.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button } from "antd";

export default function SprintGame(props) {
  let randomWord, randomTranslation;
  
  getRandomWordAndTranslation();

  function getRandomWordAndTranslation() {
    const randomNum = Math.round(Math.random());
    const randomIndex = Math.floor(Math.random() * 21);

    randomWord = props.words[randomIndex].word;
    
    randomNum === 0 ? randomTranslation = props.words[randomIndex + 1].wordTranslate : randomTranslation = props.words[randomIndex].wordTranslate;
    console.log(randomNum, randomIndex, randomWord, randomTranslation);
  }


  function isCorrect() {}
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
              <div>{randomWord}</div>
              <div>{randomTranslation}</div>
            </div>
          </section>
          <section className="buttons_section">
            <Button type="primary" id="button_ok" onClick={() => this.isCorrect(true)}>
              Верно
            </Button>
            <Button
              type="primary"
              danger
              id="button_wrong"
              onClick={() => this.isCorrect(false)}
            >
              Неверно
            </Button>
          </section>
        </section>
      </div>
    </Fragment>
  );
}
