import EditRow from "./EditRow";
import Row from "./Row";
import { useState } from "react";

export default function RowList() {
  const [responseArray, setResponseArray] = useState([]);

  console.log("responseArray", responseArray);
  return (
    <div>
      {responseArray.map((responseObj) => {
        return <Row key={responseObj.job.id} obj={responseObj} />;
      })}
      <EditRow setResponseArray={setResponseArray} />
    </div>
  );
}
