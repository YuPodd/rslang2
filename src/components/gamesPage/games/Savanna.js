import { useCallback, useEffect, useState } from 'react'
import { Button } from 'antd'
import { HeartFilled, HeartOutlined} from '@ant-design/icons'

export default function Savanna({location}) {
  const [mode, setMode] = useState()
  const [words, setWords] = useState()
  const [word, setWord] = useState()
  const [lifes, setLifes] = useState(Array(5).fill(true))
  const [gameOver, setGameOver] = useState(false)
  const [level, setLevel] = useState(null)
  const [welcome, setWelcome] = useState(true)

  useEffect(() => { setMode(location.state.from === 'GamesPage' ? 'general' : 'personal') }, [])

  useEffect(() => { // get words depending on the selected level
    if(level !== null){
      fetch(`https://rs-lang.herokuapp.com/words?group=${level}&page=0}`)
      .then((res) => res.json())
      .then(res => setWords(res))
    }}, [level])

  const subtract =  useCallback(() => {
    const subtractedLifes = Array.from(lifes)
    subtractedLifes.shift();
    subtractedLifes.push(false);
    if(subtractedLifes[0] === false) {
      console.log('gameOver')  ;
      setGameOver(true)
    }else{
      setLifes(subtractedLifes)
    }
  }, [lifes])

  const options = ['1', '2'].map( (item, i) => <div key={i} className='savanna-option'>{`${i + 1}. ${item}`}</div>);
  const selectLevels = Array(6).fill('').map( (item,i) => <Button type="primary" key={i} onClick={() => setLevel(i+1)} shape="round" size='small'>{`Level ${i + 1}`}</Button>)

  return( 
    <div className="savanna-wrapper">
      {welcome ? 
      <div className="savanna-welcome">
        <h1>Саванна</h1>
        <h3>Мини-игра «Саванна» - это тренировка по переводу пассивного изученного словаря в активную стадию.</h3>
        <div className="savanna-level">
        {mode === 'general'&& !level ? selectLevels : null}
        </div>
        <Button type="primary" onClick={() => setWelcome(false)} shape="round" size='large' disabled={!level ? true: false }>Play</Button>
      </div> 
      : 
      <>
        <div className="savanna-header">
          <div className="savanna-settings">Settings</div>
          <div className="savanna-lifes">
            {lifes.map((life,i) => life === true ? <HeartFilled key={i} style={{color: 'white'}}/> : <HeartOutlined key={i} style={{color: 'white'}}/>)}
          </div>
        </div>
        <div className="savanna-body">
          <div className="savanna-word">
            {/* {word} */}
            word
          </div>
          <div className="savanna-options">
            {options}
          </div>
        </div>
      </>
      }
      </div>


  )
}