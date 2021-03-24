export default function StudyPage() {
  const numberOfUnits = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];
  const units = numberOfUnits.map((number) => {
    return <div className="unit_div" id="number">Unit {number}</div>;
  });
  return <div className="study_wrapper">
      <div className="units_wrapper">
      {units}
      </div></div>;
}
