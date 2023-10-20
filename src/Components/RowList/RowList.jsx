import EditRow from "./EditRow";
import Row from "./Row";
import { addRow, getAll } from "../../supabase-utils";

export default function RowList() {
  async function handleAddRow() {
    // await addRow();
    await getAll();
  }
  handleAddRow();
  return (
    <div>
      <Row />
      <EditRow />
    </div>
  );
}
