import React from "react"
import GridItem from './gridItem'
import {Project} from "../../type/project";

interface GridProps{
    projects: Array<any>
}
const grid = (props:GridProps) => {
  return (
    <div className="work-wrap">
      <div className="container">
        <div className="items">
        {props.projects.map((project:Project)=>(
                <GridItem key={project._id} project={project}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default grid
