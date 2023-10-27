/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import "./JobList.css";
import { addJob, getAll } from "../../supabase-utils";
// import { handleJobListResponse } from "../../data";

export default function JobList({ handleGetJobByID, setResponse }) {
  const [inputValue, setInputValue] = useState("");
  const [jobResponse, setJobResponse] = useState([]);

  async function handleJobResponse() {
    const response = await getAll();
    setJobResponse(response);
  }

  async function handleAddJob() {
    await addJob(inputValue);
    setInputValue("");
    handleJobResponse();
  }

  useEffect(() => {
    handleJobResponse();
  }, []);

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
        {jobResponse.map((job) => {
          return (
            <JobCard
              key={job.id}
              job={job}
              handleGetJobByID={handleGetJobByID}
              setResponse={setResponse}
            />
          );
        })}
      </div>
    </>
  );
}
