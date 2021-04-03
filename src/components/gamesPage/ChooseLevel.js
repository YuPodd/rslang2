import React, { useState } from "react";
import { Radio } from "antd";
import { numberOfUnits } from "../../constants/constants";

export default function ChooseLevel() {
  const [value, setValue] = useState(1);
  function chooseLevel(e) {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  
  }

  const radioButton = numberOfUnits.map((level) => {
    return <Radio.Button value={level} key={level}>Level {level}</Radio.Button>;
  });

  return (
    <Radio.Group
      onChange={chooseLevel}
      value={value}
      id="radio_group"
    >    
      {radioButton}
    </Radio.Group>
  );
}
