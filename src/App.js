import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs'
import {Container} from 'react-bootstrap'
import Job from './Job'
import JobPages from './JobPages';
import SearchForm from './SearchForm';
import Header from './Header'

function App() {
  const [params,setParams] = useState({})
  const [page,setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params,page)

function handleParamChange(e){
  const param = e.target.name
  const value = e.target.value
  setPage(1)
  setParams(prevParams =>{
    return{...prevParams, [params]: value }
  })
}
  return (
    <Container>
      <Header />
    <h1 className='mb-4'>Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobPages page={page} setPage={setPage} hasNextPage= {hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error!! Try Refreshing</h1>}
      {jobs.map(job =>{
        return <Job key={job.id} job={job} />
      })}
      <JobPages page={page} setPage={setPage} hasNextPage= {hasNextPage}/>
    </Container>
  );
}

export default App;
