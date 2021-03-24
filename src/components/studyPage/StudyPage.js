import "animate.css/animate.css";

export default function StudyPage() {
  const numberOfUnits = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];
  const unit = numberOfUnits.map((number) => {
    return <div className="unit_div animate__animated animate__backInLeft" id="number"><a href="#">Unit {number}</a></div>;
  });
  return <div className="study_wrapper">
      <div className="units_wrapper">
      {unit}
      
      </div></div>;
}
