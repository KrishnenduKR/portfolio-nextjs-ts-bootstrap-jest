import React from 'react'

type skillProps = {
    skillName: string,
    skillLevel: string
}

const SkillBar = ({skillName, skillLevel }: skillProps) => {
    return (
        <>
            <h6>{skillName}</h6>
            <div className="skill-container">
                <div className={"skill-percentage skill" + skillLevel}></div>
            </div>
        </>
    )
}

export default SkillBar
