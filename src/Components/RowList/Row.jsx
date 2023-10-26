/* eslint-disable react/prop-types */
// import { deleteByID } from "../../supabase-utils";
import "./Row.css";
export default function Row({ obj }) {
  return (
    <div className="row" id="row">
      <div>{obj.phase.name}</div>
      {/* map over each member */}
      <div>{obj.members.member}</div>
      {/* map over */}
      <div>{obj.hours.hours}</div>
      {/* map */}
      <div>{obj.task.name}</div>
      {/* map */}
      <div>{obj.date.date}</div>
      <button>Edit</button>
      {/* <button onClick={() => deleteByID()}>Delete</button> */}
    </div>
  );
}
