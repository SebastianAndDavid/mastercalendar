/* eslint-disable react/prop-types */
// import { deleteByID } from "../../supabase-utils";
import "./Row.css";
export default function Row({ obj }) {
  return (
    <div className="row" id="row">
      <div>{obj.job.job}</div>
      <div>{obj.phase.name}</div>
      <div>{obj.members.member}</div>
      <div>{obj.hours.hours}</div>
      <div>{obj.task.name}</div>
      <div>{obj.date.date}</div>
      <button>Edit</button>
      {/* <button onClick={() => deleteByID()}>Delete</button> */}
    </div>
  );
}
