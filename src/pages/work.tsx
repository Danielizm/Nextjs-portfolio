import { useEffect, useState } from "react";
import { getProjects } from "../../sanity/sanity-utils";

export default function Work() {
    const [projects, setProjects] = useState([])
    useEffect( () => { 
        async function fetchData(){
            try{
            const posts = await getProjects();
            setProjects(posts) 
            }catch(err){
                console.log(err)
            }
        } 
        fetchData(); 
    }, []);
    return (
        <div>
            {projects.map((project)=>(
                <div key={project._id}>{project.name}</div>
            ))}
        </div>
    )
}