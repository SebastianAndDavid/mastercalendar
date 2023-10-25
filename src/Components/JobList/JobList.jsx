import JobCard from "./JobCard";
import "./JobList.css";

export default function JobList() {
  return (
    <>
      <div className="job-input">
        <input placeholder="Job Name" />
        <button>Add</button>
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
