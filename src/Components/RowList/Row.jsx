/* eslint-disable react/prop-types */
// import { deleteByID } from "../../supabase-utils";
import { useState } from "react";
import "./Row.css";
export default function Row({ phase }) {
  const [isEditingPhase, setIsEditingPhase] = useState(false);
  const [inputValue, setInputValue] = useState(phase.phase_name);
  return (
    <div className="row" id="row">
      {isEditingPhase ? (
        <div className="edit-cell">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>Update</button>
        </div>
      ) : (
        <div onClick={() => setIsEditingPhase(true)}>{phase.phase_name}</div>
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
