import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    //this is not the dest way to show load data
    const [dataLength, setDataLength]= useState(4)


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl">Job Featured: {jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button
                onClick={()=>setDataLength(jobs.length)}
                 className="btn btn-ghost">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;