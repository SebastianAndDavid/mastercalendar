const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scXR5emp2YWpua3V3YXNmY215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3Mzk0MDgsImV4cCI6MjAxMzMxNTQwOH0.IHs2pCIPKLnJk0oTZNFBR1fknTF1IzC5wSI5rraOibc";

const url = "https://olqtyzjvajnkuwasfcmy.supabase.co";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(url, key);

async function addRow() {
  const jobRes = await supabase
    .from("jobs")
    .insert({ job_name: "vladiasdflkasjdf" })
    .select();
  const teamRes = await supabase
    .from("team_members")
    .insert({ name: "tootiesrs " })
    .select();
  const phaseRes = await supabase
    .from("phases")
    .insert({ phase_name: "secnon", job_id: jobRes.data[0].id })
    .select();
  const taskRes = await supabase
    .from("tasks")
    .insert({ task_name: "pick up poop", phase_id: phaseRes.data[0].id })
    .select();
  await supabase
    .from("completion_date")
    .insert({ date: "22323", task_id: taskRes.data[0].id });
  const hoursRes = await supabase
    .from("hours")
    .insert({
      estimated_hours: 88,
      member_id: teamRes.data[0].id,
      task_id: taskRes.data[0].id,
    })
    .select();
  return hoursRes;
}

export { addRow };
