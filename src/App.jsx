import "./App.css";
import CardList from "./Components/CardList/CardList";
import RowList from "./Components/RowList/RowList";
import TopRow from "./Components/TopRow/TopRow";

function App() {
  return (
    <>
      <header>
        <h1>Taskify</h1>
      </header>
      <div className="app">
        <div className="calendar-container">
          <TopRow />
          <RowList />
        </div>
        <div className="card-container">
          <CardList />
        </div>
        <footer>
          <nav className="nav-container">
            <section className="delete">
              <img
                src="https://img.icons8.com/?size=50&id=11705&format=png"
                alt=""
              />
              <p>DELETE TABLE</p>
            </section>
            <section className="new-table">
              <img
                src="https://img.icons8.com/?size=50&id=6697&format=png"
                alt=""
              />
              <p>NEW TABLE</p>
            </section>
            <section className="teammember">
              <img
                src="https://img.icons8.com/?size=80&id=111473&format=png"
                alt=""
              />
              <p>NEW MEMBER</p>
            </section>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default App;
