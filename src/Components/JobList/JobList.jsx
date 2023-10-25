import { useState } from "react";
import JobCard from "./JobCard";
import "./JobList.css";
import { addJob } from "../../supabase-utils";

export default function JobList() {
  const [inputValue, setInputValue] = useState("");

  async function handleAddJob() {
    await addJob(inputValue);
    setInputValue("");
  }

  return (
    <>
      <div className="job-input">
        <input
          placeholder="Job Name"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={() => handleAddJob()}>Add</button>
      </div>
      <div className="jobcards-container">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </>
  );
}
