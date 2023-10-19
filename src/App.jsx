import "./App.css";
import RowList from "./Components/RowList";
import TopRow from "./Components/TopRow";

function App() {
  return (
    <>
      <div className="app">
        <div className="calendar-container">
          <TopRow />
          <RowList />
        </div>
        <div className="card-container"></div>
      </div>
    </>
  );
}

export default App;
