/* eslint-disable react/prop-types */
// import { deleteByID } from "../../supabase-utils";
import "./Row.css";
export default function Row({ phase }) {
  console.log("phase", phase);
  return (
    <div className="row" id="row">
      <div>{phase.phase_name}</div>
      <div>Team member</div>
      <div>hours</div>
      <div>
        {phase.tasks.map((task) => {
          return <p key={task.id}>{task.task_name}</p>;
        })}
      </div>
    </div>
  );
}
