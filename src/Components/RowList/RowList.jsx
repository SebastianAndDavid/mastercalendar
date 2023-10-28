/* eslint-disable react/prop-types */
import {} from "../../supabase-utils";
import EditRow from "./EditRow";
import Row from "./Row";

export default function RowList({ jobByID, response, setResponse }) {
  const phasesArray = response.data[0].phases;

  return (
    <div>
      {phasesArray.map((phase) => {
        return (
          <Row
            key={phase.id}
            phase={phase}
            setResponse={setResponse}
            jobByID={jobByID}
          />
        );
      })}
      <EditRow setResponse={setResponse} jobByID={jobByID} />
    </div>
  );
}
