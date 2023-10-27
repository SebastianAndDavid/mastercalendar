/* eslint-disable react/prop-types */
// import { deleteByID } from "../../supabase-utils";
import { useState } from "react";
import "./Row.css";
import { upDatePhaseByID } from "../../supabase-utils";
export default function Row({ phase }) {
  const [isEditingPhase, setIsEditingPhase] = useState(false);
  const [inputValue, setInputValue] = useState(phase.phase_name);
  const [phaseName, setPhaseName] = useState(phase.phase_name);

  async function handleUpdate() {
    const res = await upDatePhaseByID(inputValue, phase.id);
    console.log("res", res);
    setPhaseName(res[0].phase_name);
    setIsEditingPhase(false);
    return res;
  }
  return (
    <div className="row" id="row">
      {isEditingPhase ? (
        <div className="edit-cell">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => handleUpdate()}>Update</button>
        </div>
      ) : (
        <div onClick={() => setIsEditingPhase(true)}>{phaseName}</div>
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
