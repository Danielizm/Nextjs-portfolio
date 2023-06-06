import React from "react"

interface gridItemProps {
  project: any
}

const gridItem = (props: gridItemProps) => {
  return (
    <a>
      <div className="item">
        <div className="i">
          <image
            className="img"
            src={props.project.image}
            alt={props.project.alt}
          />
        </div>
        <div className="s1"></div>
        <div className="s2"></div>
      </div>
      <h2 className="card">{props.project.name}</h2>
    </a>
  )
}

export default gridItem
