const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-application')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return []
}


const saveJobApplication = id =>{
    console.log(id)
    const storedJobApplications = getStoredJobApplication()
     const exists = storedJobApplications.find(jobid => jobid === id) 
     if(!exists){
        storedJobApplications.push(id)
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
     }
}

export{saveJobApplication, getStoredJobApplication}