/* eslint-disable react/prop-types */
import {} from "../../supabase-utils";
import EditRow from "./EditRow";
import Row from "./Row";
import { useState } from "react";

export default function RowList({ jobByID }) {
  const [responseArray, setResponseArray] = useState({});
  console.log("responseArray.data[0].phases", responseArray);

  return (
    <div>
      {/* {responseArray.data[0].phases.map((responseObj) => {
        return <Row key={responseObj.job.id} obj={responseObj} />;
      })} */}
      <EditRow setResponseArray={setResponseArray} jobByID={jobByID} />
    </div>
  );
}
