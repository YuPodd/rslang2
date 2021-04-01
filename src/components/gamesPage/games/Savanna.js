import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GAME_MODE } from '../../../store/ActionTypes'
export default function Savanna({location}) {
  console.log(location)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: GAME_MODE, from : location.state.from})
  }, [])


  const from = useSelector(state => state.savanna.from)
  return( 
    <div className="savanna-wrapper">
      {from}
    </div>
  )
}