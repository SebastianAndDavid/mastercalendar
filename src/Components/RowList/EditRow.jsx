import { useState } from "react";
import { addRow, getAll } from "../../supabase-utils";
import { handleRestructureResponse } from "../../data";

// eslint-disable-next-line react/prop-types
export default function EditRow({ setResponseArray }) {
  const [job, setJob] = useState("");
  const [phase, setPhase] = useState("");
  const [teamMember, setTeamMember] = useState("");
  const [hours, setHours] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  async function handleAddRow() {
    const rowObj = {
      job,
      phase,
      teamMember,
      hours,
      task,
      date,
    };
    if (Object.values(rowObj).every((prop) => prop)) {
      await addRow(rowObj);
      const res = await getAll();
      const restructuredRes = handleRestructureResponse(res);
      setResponseArray(restructuredRes);

      setJob("");
      setPhase("");
      setTask("");
      setTeamMember("");
      setHours("");
      setDate("");
    } else {
      alert("All fields are required");
    }
  }

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
      <button onClick={() => handleAddRow()}>Add Row</button>
    </div>
  );
}
