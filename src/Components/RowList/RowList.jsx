/* eslint-disable react/prop-types */
import {} from "../../supabase-utils";
import EditRow from "./EditRow";
import Row from "./Row";
import { useState } from "react";

export default function RowList({ jobByID }) {
  const [responseArray, setResponseArray] = useState([]);
  // const [responseArrayByJobID, setResponseArrayByJobID] = useState([]);

  // async function handleGetRowByJobID() {
  //   const res = await getRowByJobID(jobByID);
  //   console.log("res", res);
  //   setResponseArrayByJobID([res]);
  //   return res;
  // }

  // useEffect(() => {
  //   handleGetRowByJobID();
  // }, []);

  return (
    <div>
      {responseArray.map((responseObj) => {
        return <Row key={responseObj.job.id} obj={responseObj} />;
      })}
      {/* {responseArrayByJobID.map((responseObj) => {
        return <Row key={responseObj.job.id} obj={responseObj} />;
      })} */}
      <EditRow setResponseArray={setResponseArray} jobByID={jobByID} />
    </div>
  );
}
