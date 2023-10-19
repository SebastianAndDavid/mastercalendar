import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function EditRow({ handleAddRow }) {
  const [job, setJob] = useState("");
  const [phase, setPhase] = useState("");
  const [teamMember, setTeamMember] = useState("");
  const [hours, setHours] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const rowObj = {
    job,
    phase,
    teamMember,
    hours,
    task,
    date,
  };

  return (
    <div className="row" id="edit-row">
      <input value={job} onChange={(e) => setJob(e.target.value)} type="text" />
      <input
        value={phase}
        onChange={(e) => setPhase(e.target.value)}
        type="text"
      />
      <input
        value={teamMember}
        onChange={(e) => setTeamMember(e.target.value)}
        type="text"
      />
      <input
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        type="text"
      />
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="text"
      />
      <button onClick={() => handleAddRow(rowObj)}>Add Row</button>
    </div>
  );
}
