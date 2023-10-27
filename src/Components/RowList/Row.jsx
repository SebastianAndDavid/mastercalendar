/* eslint-disable react/prop-types */
// import { deleteByID } from "../../supabase-utils";
import { useState } from "react";
import "./Row.css";
export default function Row({ phase }) {
  const [isEditing, setIsEditing] = useState(false);
  // const [inputValue, setInputValue] = useState(phase.phase_name);
  return (
    <div className="row" id="row">
      {isEditing ? (
        <input placeholder="hi" />
      ) : (
        <div onClick={() => setIsEditing(true)}>{phase.phase_name}</div>
      )}
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
