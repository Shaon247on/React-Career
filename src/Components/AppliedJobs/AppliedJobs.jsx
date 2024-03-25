import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [displayJobs, setDisplayJobs] = useState([])

    const [appliedJobs, setAppliedJobs] = useState([])

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'Remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'Onsite'){
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onSiteJobs)
        }
    }

    useEffect(() => {
        const storedJobsID = getStoredJobApplication()
        if (jobs.length > 0) {
            const jobsApplied = []
            for (const id of storedJobsID) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
                setAppliedJobs(jobsApplied)
                setDisplayJobs(jobsApplied)
            }
        }
    }, [jobs])

    return (

        <div className="text-center">
            <h1 className="text-4xl font-bold">Applied for jobs: {appliedJobs.length}</h1>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter('All')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('Remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('Onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul className="space-y-5 mt-4">
                {
                    displayJobs.map(job => <li
                        key={job.id}
                        className="text-2xl "
                    ><span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span></li>)
                }
            </ul>

        </div>
    );
};

export default AppliedJobs;