import React, { useState } from 'react';
import { Radio } from "antd";
import { numberOfUnits } from "../../constants/constants";

export default function ChooseLevel() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const radioButton = numberOfUnits.map((level) => {
    return <Radio value={level}>Level {level}</Radio>;
  });

  return (
    <Radio.Group onChange={onChange} value={value}>
      {radioButton}
    </Radio.Group>
  );
}
