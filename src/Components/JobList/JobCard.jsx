import { getAllByJobID } from "../../supabase-utils";

/* eslint-disable react/prop-types */
export default function JobCard({ job, handleGetJobByID, setResponse }) {
  async function handleClick() {
    const res = await getAllByJobID(job.id);
    setResponse(res);
    handleGetJobByID(job.id);
  }

  return (
    <div className="jobcard" onClick={() => handleClick()}>
      <h3>Job Name: {job.job_name}</h3>
      <div className="jobcard-phases">
        <p>
          <strong>Phases: </strong>
        </p>
        {job.phases.map((phase) => {
          return <p key={phase.id}>{phase.phase_name}</p>;
        })}
      </div>
      <div className="jobcard-members">
        <p>
          <strong>Team Members: </strong>
        </p>
        {job.phases.map((phase) => {
          return phase.tasks.map((task) => {
            return task.hours.map((hour) => (
              <p key={hour.id}>
                {hour.team_members.name} - {task.task_name} (
                {hour.estimated_hours} hours)
              </p>
            ));
          });
        })}
      </div>
      {/* <h3>Phases: {job.}</h3> */}
      {/* <button onClick={() => deleteByID(job.job.id)}>Delete</button> */}
    </div>
  );
}
