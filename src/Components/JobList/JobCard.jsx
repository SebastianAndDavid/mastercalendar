import { deleteByID } from "../../supabase-utils";

/* eslint-disable react/prop-types */
export default function JobCard({ job, handleGetJobByID, setToggleDetail }) {
  function handleClick() {
    handleGetJobByID(job.job.id);
    setToggleDetail(true);
  }

  return (
    <div className="jobcard">
      <h3>{job.job.job}</h3>
      <button onClick={() => handleClick()}>Details</button>
      <button onClick={() => deleteByID(job.job.id)}>Delete</button>
    </div>
  );
}
