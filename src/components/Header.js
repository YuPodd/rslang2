import {Link} from "react-router-dom";

export default function Header(){
    return(
        <header>
            <nav>
                <Link to="/mainPage">Main</Link>
                <Link to="/textbookPage">Textbook</Link>
                <Link to="/gamesPage">Games</Link>
                <Link to="/statisticPage">Statistic</Link>
            </nav>
        </header>

    )
}