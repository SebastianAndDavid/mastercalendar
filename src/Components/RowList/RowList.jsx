/* eslint-disable react/prop-types */
import {} from "../../supabase-utils";
import EditRow from "./EditRow";
import Row from "./Row";

export default function RowList({ jobByID, response, setResponse }) {
  console.log("response", response);

  const phasesArray = response.data[0].phases;
  console.log("response.data[0].phases", phasesArray);

  return (
    <div>
      {phasesArray.map((phase) => {
        return <Row key={phase.id} phase={phase} />;
      })}
      <EditRow setResponse={setResponse} jobByID={jobByID} />
    </div>
  );
}
