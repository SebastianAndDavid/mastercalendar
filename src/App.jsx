import "./App.css";
import CardList from "./Components/CardList/CardList";
import RowList from "./Components/RowList/RowList";
import TopRow from "./Components/TopRow/TopRow";

function App() {
  return (
    <>
      <header>hi</header>
      <div className="app">
        <div className="calendar-container">
          <TopRow />
          <RowList />
        </div>
        <div className="card-container">
          <CardList />
        </div>
      </div>
    </>
  );
}

export default App;
