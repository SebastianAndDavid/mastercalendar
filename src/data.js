function handleRestructureResponse(res) {
  const responseObj = {
    job: {
      id: res.id,
      job: res.job_name,
    },
    phase: {
      id: res.phases[0].id,
      name: res.phases[0].phase_name,
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
}

function handleJobListResponse(response) {
  return response.map((res) => {
    const responseObj = {
      job: {
        id: res.id,
        job: res.job_name,
      },
      phase: {
        id: res.phases[0]?.id,
        name: res.phases[0]?.phase_name,
      },
      members: {
        id: res.phases[0]?.tasks[0]?.hours[0]?.team_members.id,
        member: res.phases[0]?.tasks[0]?.hours[0]?.team_members.name,
      },
    };

    return responseObj;
  });
}

// ideal response data shape
// const phaseObj = {
//   teamMembers: [
//     {
//       id: 1,
//       name: "Joe",
//     },
//     {
//       id: 2,
//       name: "Sarah",
//     },
//   ],
//   hours: [
//     {
//       id: 1,
//       hours: 3,
//     },
//     {
//       id: 2,
//       hours: 5,
//     },
//   ],
//   tasks: [
//     {
//       id: 1,
//       name: "sweep",
//     },
//     {
//       id: 2,
//       name: "mop",
//     },
//   ],
//   completionDate: [
//     {
//       id: 1,
//       date: "1/12",
//     },
//     {
//       id: 2,
//       date: "1/16",
//     },
//   ],
// };

export { handleRestructureResponse, handleJobListResponse };
