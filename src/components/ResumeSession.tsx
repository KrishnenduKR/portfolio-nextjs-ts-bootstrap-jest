import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faBuilding, faStar } from '@fortawesome/free-solid-svg-icons';

type resumeSessionProps = {
    year: string,
    title?: string,
    location?: string,
    roleSummary: string
}

const ResumeSession = ({year, title,location, roleSummary}: resumeSessionProps) => {
  return (
    <>
      <h6 className="event-date spacer">{year}</h6>
      {title ? <p><FontAwesomeIcon className='fa-icon-resume' icon={faClipboard}/>{title}</p>: "" }
      {location? <p><FontAwesomeIcon className='fa-icon-resume' icon={faBuilding} />{location}</p>: ""}
      <p><FontAwesomeIcon className='fa-icon-resume' icon={faStar} />{roleSummary}</p>
    </>
  )
}

export default ResumeSession
