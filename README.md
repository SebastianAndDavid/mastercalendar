Organizer and Master Calendar concept for Designer Sanity
Possible names - Taskify, Planify, TaskTide

Front end - Vite/React
Back end - Supabase

Get Job By ID

JobList

- On click of job card, get that job's ID
  - this ID is used in a function which is a prop caught in job card, defined in higher level
  - probably defined in app
- make a get call to supabase with that job id
- with that response, display a row list

Row component

- for each phase, map over and display it's data

Data

Jobs => Phases => Tasks => Completion Date + Hours => Team Members

We can shape our data how we want - make mapping easier - data.js restructure (munging)
