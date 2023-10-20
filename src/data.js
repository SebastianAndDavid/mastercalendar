function handleResponse(response) {
  return response.map((res) => {
    const responseObj = {
      job: {
        id: res.id,
        job: res.job_name,
      },
      phase: {
        id: res.phases[0].id,
        phase_name: res.phases[0].phase_name,
      },
      task: {
        id: res.phases[0].tasks[0].id,
        name: res.phases[0].tasks[0].task_name,
      },
      date: {
        id: res.phases[0].tasks[0].completion_date[0].id,
        date: res.phases[0].tasks[0].completion_date[0].date,
      },
      hours: {
        id: res.phases[0].tasks[0].hours[0].id,
        hours: res.phases[0].tasks[0].hours[0].estimated_hours,
      },
      members: {
        id: res.phases[0].tasks[0].hours[0].team_members.id,
        member: res.phases[0].tasks[0].hours[0].team_members.name,
      },
    };
    return responseObj;
  });
}

export { handleResponse };
