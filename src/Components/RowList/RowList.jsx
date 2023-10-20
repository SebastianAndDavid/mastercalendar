import EditRow from "./EditRow";
import Row from "./Row";
import { addRow, getAll } from "../../supabase-utils";

export default function RowList() {
  async function handleAddRow(rowObj) {
    await addRow(rowObj);
    // await getAll();
  }
  return (
    <div>
      <Row />
      <EditRow handleAddRow={handleAddRow} />
    </div>
  );
}
