import React from 'react';
import './App.css';

import Jobs from './Jobs.js';

const mockJobs = [
  {title: 'SWE', company: 'Google' }
]

const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  let json = await res.json();

  updateCb(json);
}

function App() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
      {/* <Jobs jobs={mockJobs} /> */}
    </div>
  );
}

export default App;
