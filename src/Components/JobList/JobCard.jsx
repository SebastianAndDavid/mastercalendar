/* eslint-disable react/prop-types */
export default function JobCard({ job, handleGetJobByID }) {
  return (
    <div className="jobcard" onClick={() => handleGetJobByID(job.job.id)}>
      <h3>{job.job.job}</h3>
    </div>
  );
}
