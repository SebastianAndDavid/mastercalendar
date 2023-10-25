/* eslint-disable react/prop-types */
import { useState } from "react";
import JobCard from "./JobCard";
import "./JobList.css";
import { addJob, getAll } from "../../supabase-utils";
import { handleJobListResponse } from "../../data";

export default function JobList({ handleGetJobByID }) {
  const [inputValue, setInputValue] = useState("");
  const [jobResponse, setJobResponse] = useState([]);
  console.log("jobResponse", jobResponse);

  async function handleJobResponse() {
    const response = await getAll();
    const updatedRes = await handleJobListResponse(response);
    setJobResponse(updatedRes);
  }

  async function handleAddJob() {
    await addJob(inputValue);
    setInputValue("");
    handleJobResponse();
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
        {jobResponse.map((job) => {
          return (
            <JobCard
              key={job.id}
              job={job}
              handleGetJobByID={handleGetJobByID}
            />
          );
        })}
      </div>
    </>
  );
}
