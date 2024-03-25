import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" className="w-full h-56" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{job_title}</h2>
                <p className="text-lg text-slate-600/70">{company_name}</p>
                <div className="flex gap-4">
                    <button className=" px-5 py-2 border-2 border-[#7E90FE] rounded-lg text-[#7E90FE] font-extrabold">{remote_or_onsite}</button>
                    <button className="px-5
                     py-2 border-2 border-[#7E90FE] rounded-lg text-[#7E90FE] font-extrabold">{job_type}</button>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-2 items-center">
                        <CiLocationOn className="text-2xl"></CiLocationOn>
                        <h4 className="text-lg font-semibold">{location}</h4>

                    </div>
                    <div className="flex gap-2 items-center">
                        <CiDollar className="text-2xl"></CiDollar>
                        <h4 className="text-lg font-semibold">{salary}</h4>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}><button className="btn text-lg font-semibold bg-gradient-to-r from-indigo-500 to-[#7E90FE] text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;