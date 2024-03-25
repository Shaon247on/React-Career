import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";
const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idNum = parseInt(id)
    const job = jobs.find(job => job.id == idNum)
    // console.log(id, jobs, job)

    const handleApplyJob = ()=>{
        saveJobApplication(idNum)
        toast("You have applied successfully")
    }
    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3 border-2 border-red-300">
                    <h2>Details Coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border-2 border-green-500">
                    <h2 className="text-4xl">Side thing</h2>
                    <button onClick={handleApplyJob} className="btn btn-accent">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;