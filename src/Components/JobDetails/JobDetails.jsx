import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idNum = parseInt(id)
    const job = jobs.find(job => job.id == idNum)
    console.log(id, jobs, job)
    return (
        <div>
            <div className="grid md:grid-cols-4">
                <div className="border md:cols"></div>
                <div className="border"></div>

            </div>
        </div>
    );
};

export default JobDetails;