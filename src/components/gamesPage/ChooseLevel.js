import React, { useState } from "react";
import { Button, Radio } from "antd";
import { numberOfUnits } from "../../constants/constants";

export default function ChooseLevel() {
  const [value, setValue] = useState(1);
  function chooseLevel(e) {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    document
      .getElementById("radio_group")
      .classList.add("animate__backOutRight");
    setTimeout(function () {
      document.getElementById("radio_group").className = "undisplayed";
    }, 500);
  }

  const radioButton = numberOfUnits.map((level) => {
    return <Radio value={level}>Level {level}</Radio>;
  });

  return (
    <Radio.Group
      onChange={chooseLevel}
      value={value}
      className="animate__animated animate__backInRight"
      id="radio_group"
    >
      <h3 className="select_level_title">Пожалуйста выберите сложность игры</h3>
      {radioButton}
    </Radio.Group>
  );
}
