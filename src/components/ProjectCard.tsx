import React from 'react'

type projectProps = {
    title : string,
    about: string,
    role : string
}

const ProjectCard = ({title, about, role}: projectProps) => {
  return (
    <>
      <h6>{title}</h6>
        <div className="row border border-dark shadow p-3 mb-4 rounded">
            <div className="col-sm-6">
                About:<br/>
                <p>{about}</p>
            </div>
            <div className="col-sm-6">
                Role:<br/>
                <p>{role}</p>
            </div>
        </div>
    </>
  )
}

export default ProjectCard
