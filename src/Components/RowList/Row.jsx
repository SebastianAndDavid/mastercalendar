/* eslint-disable react/prop-types */
// import { deleteByID } from "../../supabase-utils";
import "./Row.css";
export default function Row({ phase }) {
  return (
    <div className="row" id="row">
      <div>{phase.phase_name}</div>
      <div>
        {phase.tasks.map((task) => {
          return task.hours.map((hour) => (
            <p key={hour.id + 7}>{hour.team_members.name}</p>
          ));
        })}
      </div>
      <div>
        {phase.tasks.map((task) => {
          return task.hours.map((hour) => (
            <p key={hour.id}>{hour.estimated_hours}</p>
          ));
        })}
      </div>
      <div>
        {phase.tasks.map((task) => {
          return <p key={task.id}>{task.task_name}</p>;
        })}
      </div>
      <div>
        {phase.tasks.map((task) => {
          return task.completion_date.map((date) => (
            <p key={date.id}>{date.date}</p>
          ));
        })}
      </div>
    </div>
  );
}
