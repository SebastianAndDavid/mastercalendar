const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scXR5emp2YWpua3V3YXNmY215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3Mzk0MDgsImV4cCI6MjAxMzMxNTQwOH0.IHs2pCIPKLnJk0oTZNFBR1fknTF1IzC5wSI5rraOibc";

const url = "https://olqtyzjvajnkuwasfcmy.supabase.co";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(url, key);

async function addRow(rowObj) {
  const jobRes = await supabase
    .from("jobs")
    .insert({ job_name: rowObj.job })
    .select();
  const teamRes = await supabase
    .from("team_members")
    .insert({ name: rowObj.teamMember })
    .select();
  const phaseRes = await supabase
    .from("phases")
    .insert({ phase_name: rowObj.phase, job_id: jobRes.data[0].id })
    .select();
  const taskRes = await supabase
    .from("tasks")
    .insert({ task_name: rowObj.task, phase_id: phaseRes.data[0].id })
    .select();
  await supabase
    .from("completion_date")
    .insert({ date: rowObj.date, task_id: taskRes.data[0].id });
  const hoursRes = await supabase
    .from("hours")
    .insert({
      estimated_hours: rowObj.hours,
      member_id: teamRes.data[0].id,
      task_id: taskRes.data[0].id,
    })
    .select();
  return hoursRes;
}

async function getAll() {
  const { data } = await supabase.from("jobs").select(`
  id,
  job_name,
  phases (id, phase_name, tasks (id, task_name, hours (id, estimated_hours, team_members (id, name)), completion_date (id, date)))`);
  return data;
}

export { addRow, getAll };