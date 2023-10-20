import EditRow from "./EditRow";
import Row from "./Row";
import { addRow } from "../../supabase-utils";

export default function RowList() {
  async function handleAddRow() {
    await addRow();
  }
  handleAddRow();
  return (
    <div>
      <Row />
      <EditRow />
    </div>
  );
}
