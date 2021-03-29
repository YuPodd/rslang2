import { Route, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link, useRouteMatch} from "react-router-dom";

export default function Unit() {
  const { path, url } = useRouteMatch();
  let { number } = useParams();
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://rs-lang.herokuapp.com/words?group=${number - 1}&page=${page}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [page]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
        <Route path={`${path}/page-:page`}>  
          <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={`https://rs-lang.herokuapp.com/${item.image}`}></img>
              <audio controls><source src={`https://rs-lang.herokuapp.com/${item.audio}`} type="audio/mp3"></source></audio>
              {item.word} {item.wordTranslate}
            </li>
          ))}
          </ul>
        </Route>
        <div className="buttons__container">
          <Link onClick={() => setPage(0)} to={`${url}/page-0`}>{"<<"}</Link>
          <Link onClick={() => setPage(page > 0 ? page - 1: 0)} to={`${url}/page-${page > 0 ? page - 1: 0}`}>{"<"}</Link>
          <Link>{page + 1}</Link>
          <Link onClick={() => setPage(page < 29 ? page + 1: 29)} to={`${url}/page-${page < 29 ? page + 1: 29}`}>{">"}</Link>
          <Link onClick={() => setPage(29)} to={`${url}/page-29`}>{">>"}</Link>
        </div>
      </Fragment>
    );
  }
}
