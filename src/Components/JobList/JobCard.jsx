/* eslint-disable react/prop-types */
export default function JobCard({ job }) {
  return (
    <div className="jobcard">
      <h3>{job.job.job}</h3>
    </div>
  );
}
