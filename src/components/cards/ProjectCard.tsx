import React from 'react'

interface CardProps {
    imgUrl: string;
}

const ProjectCard: React.FC<CardProps> = ({ imgUrl }) => {
  return (
    <div><img src={imgUrl} alt="" /></div>
  )
}

export default ProjectCard