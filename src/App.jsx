import { useState } from "react";
import "./App.css";
import RowList from "./Components/RowList/RowList";
import TopRow from "./Components/TopRow/TopRow";
import JobList from "./Components/JobList/JobList";
import { getJobByID } from "./supabase-utils";

function App() {
  const [toggleDetail, setToggleDetail] = useState(false);
  const [jobByID, setJobByID] = useState({});
  const [response, setResponse] = useState({});

  async function handleGetJobByID(id) {
    const res = await getJobByID(id);
    setJobByID(res);
    setToggleDetail(true);
    return res;
  }

  return (
    <>
      <header>
        <h1>Taskify</h1>
        {toggleDetail && (
          <button onClick={() => setToggleDetail(false)}>See Jobs List</button>
        )}
      </header>
      <div className="app">
        {toggleDetail ? (
          <div className="calendar-container">
            <h2>{jobByID.data && jobByID.data[0].job_name}</h2>
            <TopRow />
            <RowList
              jobByID={jobByID}
              response={response}
              setResponse={setResponse}
            />
          </div>
        ) : (
          <div className="joblist-container">
            <JobList
              handleGetJobByID={handleGetJobByID}
              setToggleDetail={setToggleDetail}
              setResponse={setResponse}
            />
          </div>
        )}
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
