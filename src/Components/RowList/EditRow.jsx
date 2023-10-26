/* eslint-disable react/prop-types */
import { useState } from "react";
import { addRow, getAllByJobID } from "../../supabase-utils";

export default function EditRow({ setResponseArray, jobByID }) {
  const [phase, setPhase] = useState("");
  const [teamMember, setTeamMember] = useState("");
  const [hours, setHours] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const jobID = jobByID.data[0].id;

  async function handleAddRow() {
    const rowObj = {
      phase,
      teamMember,
      hours,
      task,
      date,
    };
    if (Object.values(rowObj).every((prop) => prop)) {
      await addRow(jobID, rowObj);
      const res = await getAllByJobID(jobID);
      console.log("res", res);
      setResponseArray(res);

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
