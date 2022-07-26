import logo from "./logo.svg";
import "./App.css";
import KingNoodleMenu from "./KingNoodleHouse-July-25-2022.pdf";

function App() {
    return (
        <div className="App">
            <embed
                src={`${KingNoodleMenu}#view=fitH&toolbar=0`}
                title="KingNoodleHouse"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    );
}

export default App;
