import EditRow from "./EditRow";
import Row from "./Row";
import { addRow, getAll } from "../../supabase-utils";
import { useState } from "react";
import { handleRestructureResponse } from "../../data";

export default function RowList() {
  const [responseArray, setResponseArray] = useState([]);
  async function handleAddRow(rowObj) {
    await addRow(rowObj);
    const res = await getAll();
    const restructuredRes = handleRestructureResponse(res);
    setResponseArray(restructuredRes);
  }
  return (
    <div>
      <Row />
      <EditRow handleAddRow={handleAddRow} />
    </div>
  );
}
