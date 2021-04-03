import { Fragment ,useEffect, useState} from "react";
import "../../../styles/sprint_styles.css";
import "antd/dist/antd.css";
import { Button } from 'antd'
import SprintGame from './SprintGame'

export default function Sprint({location}) {
  console.log(location)
  const [mode, setMode] = useState()
  const [words, setWords] = useState([])
  const [level, setLevel] = useState(null)
  const [welcome, setWelcome] = useState(true)
  
  useEffect(() => { // get words depending on the selected level
    if(level !== null){
      fetch(`https://rs-lang.herokuapp.com/words?group=${level}&page=0}`)
      .then((res) => res.json())
      .then(res => setWords(res))
    }}, [level])

  useEffect(() => { setMode(location.state.from === 'GamesPage' ? 'general' : 'personal') }, [])

  const selectLevels = Array(6).fill('').map( (item,i) => <Button type="primary" key={i} onClick={() => setLevel(i+1)} shape="round" size='small'>{`Level ${i + 1}`}</Button>)

  return( 
    <div className="sprint-wrapper">
      {welcome ? 
      <div className="sprint-welcome">
        <h1>Спринт</h1>
        <h3>Мини-игра «Спринт» - это отличный способ потренировать слова и их значение на время.</h3>
        <div className="sprint-level">
        {mode === 'general'&& !level ? selectLevels : null}
        </div>
        <Button type="primary" onClick={() => setWelcome(false)} shape="round" size='large' disabled={!level ? true: false }>Play</Button>
      </div> 
      : 
  <SprintGame words={words}/>
      }
      </div>


  )

    
}
