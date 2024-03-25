const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-application')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return []
}


const saveJobApplication = id =>{
    const storedJobApplication = getStoredJobApplication()
     const exists = storedJobApplication.find(jobid => jobid === id) 
     if(!exists){
        storedJobApplication.push(id)
        localStorage.setItem('job-application')
     }
}

export{saveJobApplication, getStoredJobApplication}