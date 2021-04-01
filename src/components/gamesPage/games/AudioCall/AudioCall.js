import { useEffect } from 'react';
import { useState } from 'react';
import css from './AudioCall.module.css';

const ContantGame = () => {
  return (
    <>
      <button className="play-words">PLAY</button>
      <button>Test 1</button>
      <button>Test 2</button>
      <button>Test 3</button>
      <button>Test 4</button>
      <button>Test 5</button>
    </>
  );
};

const AudioCall = () => {
  const [isGame, setIsGame] = useState(false);
  const onClickStartBtn = () => {
    setIsGame((prevIsGame) => !prevIsGame);
  };

  useEffect(() => {
    fetch('https://rs-lang.herokuapp.com/words')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className={css.game}>
      <button className={css['start-btn']} onClick={onClickStartBtn}>
        START
      </button>
      {isGame && <ContantGame />}
    </div>
  );
};

export default AudioCall;
