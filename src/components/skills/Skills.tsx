import React from 'react'
import './Skills.scss'

interface skillsProps {
    number: number,
    caption: string,
}

const Skills: React.FC<skillsProps> = ({number, caption}) => {
  return (
    <div>
      
    <div className='progresscircle'><h4>{number}</h4></div>
    <h4>{caption}</h4>
    </div>
  )
}

export default Skills