import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <iframe
                src={`https://drive.google.com/file/d/1MnyugLACTVc_jqqqrUumq4ROpyYmziKS/preview#view=fitH&toolbar=0`}
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
