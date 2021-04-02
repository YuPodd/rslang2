import { Fragment ,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { GAME_MODE } from '../../../store/ActionTypes'
import "../../../styles/sprint_styles.css";
import "antd/dist/antd.css";
import ChooseLevelModal from "../ChooseLevelModal";
import SprintGame from './SprintGame'

export default function Sprint({location}) {
  console.log(location)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GAME_MODE, from : location.state.from})
  }, [])
  const from = useSelector(state => state.savanna.from);
   
  if (from.value === GAME_MODE.value){
    console.log('User comes from main menu');
    return (
      <Fragment>
        <ChooseLevelModal/>
        <SprintGame/>
       </Fragment>
    );
 
  } 
    console.log('user comes from studyPage');
    return (
      <Fragment>
         <SprintGame/>
       </Fragment>
    );
  

  
}
