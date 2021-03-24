import { useParams } from "react-router";
import {useEffect, useState} from 'react';
import { Fragment } from "react";

export default function Unit() {
  let { number } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://rs-lang.herokuapp.com/words?group=${number-1}&page=1`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <Fragment>
            <div>Unit {number}</div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
           <img src={item.image}></img>{item.word} {item.wordTranslate}
          </li>
        ))}
      </ul>
      </Fragment>
    );
  }
}