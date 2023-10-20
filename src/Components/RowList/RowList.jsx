import EditRow from "./EditRow";
import Row from "./Row";
import { addRow, getAll } from "../../supabase-utils";
import { useState } from "react";
import { handleResponse } from "../../data";

export default function RowList() {
  const [readAll, setReadAll] = useState([]);
  async function handleAddRow(rowObj) {
    await addRow(rowObj);
    const res = await getAll();
    const response = handleResponse(res);
    setReadAll(response);
  }
  console.log("readAll", readAll);
  return (
    <div>
      <Row />
      <EditRow handleAddRow={handleAddRow} />
    </div>
  );
}
