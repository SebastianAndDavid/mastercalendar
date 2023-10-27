/* eslint-disable react/prop-types */
// import { deleteByID } from "../../supabase-utils";
import { useState } from "react";
import "./Row.css";
import { addTeamMemberInfo, upDatePhaseByID } from "../../supabase-utils";
export default function Row({ phase }) {
  const [isEditingPhase, setIsEditingPhase] = useState(false);
  const [isEditingTeamInfo, setIsEditingTeamInfo] = useState(false);
  const [inputValue, setInputValue] = useState(phase.phase_name);
  const [teamInputValue, setTeamInputValue] = useState("");
  const [hoursInputValue, setHoursInputValue] = useState("");
  const [taskInputValue, setTaskInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState("");
  const [phaseName, setPhaseName] = useState(phase.phase_name);

  async function handleUpdate() {
    const res = await upDatePhaseByID(inputValue, phase.id);
    setPhaseName(res[0].phase_name);
    setIsEditingPhase(false);
    return res;
  }

  async function handleTeamInfo() {
    const rowObj = {
      teamMember: teamInputValue,
      hours: hoursInputValue,
      task: taskInputValue,
      date: dateInputValue,
    };

    if (Object.values(rowObj).every((prop) => prop)) {
      await addTeamMemberInfo(phase.id, rowObj);
      setIsEditingTeamInfo(false);
    } else {
      alert("All fields are required");
    }
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

      {!isEditingTeamInfo ? (
        <>
          <div onClick={() => setIsEditingTeamInfo(true)}>
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
        </>
      ) : (
        <>
          <div className="edit-cell">
            <input
              value={teamInputValue}
              onChange={(e) => setTeamInputValue(e.target.value)}
            />
          </div>
          <div className="edit-cell">
            <input
              value={hoursInputValue}
              onChange={(e) => setHoursInputValue(e.target.value)}
            />
          </div>
          <div className="edit-cell">
            <input
              value={taskInputValue}
              onChange={(e) => setTaskInputValue(e.target.value)}
            />
          </div>
          <div className="edit-cell">
            <input
              value={dateInputValue}
              onChange={(e) => setDateInputValue(e.target.value)}
            />
            <button onClick={() => handleTeamInfo()}>Add</button>
          </div>
        </>
      )}
    </div>
  );
}
