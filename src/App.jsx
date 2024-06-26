import "./App.css";
import Nav from "./nav/Nav";
import Ongtaraf from "./ongtaraf/Ongtaraf";
import Section from "./section/Main";
import Section2 from "./section2/Section2";

function App() {
    return (
        <>
            <div className="container">
                <div className="container__div">
                    <Nav />
                    <Section />
                    <Section2 />
                </div>
                <Ongtaraf />
            </div>
        </>
    );
}

export default App;
