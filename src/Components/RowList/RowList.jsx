import EditRow from "./EditRow";
import Row from "./Row";

export default function RowList() {
  // async function handleAddRow(rowObj) {
  //   await Supase.post(rowObj);
  //   const res = await Supabase.getAll();
  //   setState(res);
  // }

  return (
    <div>
      <Row />
      <EditRow />
    </div>
  );
}
