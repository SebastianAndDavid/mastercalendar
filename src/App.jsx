import { useState } from "react";
import "./App.css";
import RowList from "./Components/RowList/RowList";
import TopRow from "./Components/TopRow/TopRow";
import JobList from "./Components/JobList/JobList";
import { deleteRow } from "./supabase-utils";

function App() {
  const [toggleDetail, setToggleDetail] = useState(false);
  return (
    <>
      <header>
        <h1>Taskify</h1>
        {toggleDetail ? (
          <button onClick={() => setToggleDetail(false)}>Show Details</button>
        ) : (
          <button onClick={() => setToggleDetail(true)}>Show List</button>
        )}
      </header>
      <div className="app">
        {toggleDetail ? (
          <div className="calendar-container">
            <TopRow />
            <RowList />
          </div>
        ) : (
          <div className="joblist-container">
            <JobList />
          </div>
        )}
        <footer>
          <nav className="nav-container">
            <section className="delete" onClick={() => deleteRow()}>
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
