import { deleteByID, getAllByJobID } from "../../supabase-utils";

/* eslint-disable react/prop-types */
export default function JobCard({ job, handleGetJobByID, setResponse }) {
  async function handleClick() {
    const res = await getAllByJobID(job.job.id);
    setResponse(res);
    handleGetJobByID(job.job.id);
  }

  return (
    <div className="jobcard">
      <h3>{job.job.job}</h3>
      <button onClick={() => handleClick()}>Details</button>
      <button onClick={() => deleteByID(job.job.id)}>Delete</button>
    </div>
  );
}
