import React from 'react'

interface skillsProps {
    number: number,
    caption: string,
}

const Skills: React.FC<skillsProps> = ({number, caption}) => {
  return (
    <div>
    <img src="" alt="" />
    <h4>{number}</h4>
    <h4>{caption}</h4>
    </div>
  )
}

export default Skills