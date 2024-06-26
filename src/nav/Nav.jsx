import "./Nav.css";

let Nav = () => {
    return (
        <>
            <nav>
                <div className="nav">
                    <ul>
                        <li className="orange">Game</li>
                        <li>Live score</li>
                        <li>Statistics</li>
                        <li>Analitics</li>
                        <li>Forecasts</li>
                    </ul>
                </div>
                <div className="Nav__bg-img">
                    <div className="Nav__bg-img__content">
                        <h2>The Forbidden Kingdom Adventure War</h2>
                        <a
                            target="_blank"
                            href="https://www.imdb.com/title/tt0865556/"
                        >
                            <button>More Details</button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
