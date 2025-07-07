import React from 'react'

type listProps = {
    name: string,
    data : string[] | number[]
}

const SimpleList = ({name, data}: listProps) => {
  return (
    <>
    <h5>{name}</h5>
    <ul>
        {data.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
    </>
    
  )
}

export default SimpleList
