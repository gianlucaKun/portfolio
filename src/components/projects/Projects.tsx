import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import './Projects.scss'

const Projects: React.FC = () => {
  return (
    <div className='containerProjects'>
        <div><h2>Projects</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eum quod maiores at quidem culpa quasi eligendi ea, consequatur nemo animi et! Unde illum eos itaque repellat at tempore ducimus.</p></div>
        <div className='containerPreviewProjects'>
            <ProjectCard imgUrl='https://picsum.photos/400/300' />
            <ProjectCard imgUrl='https://picsum.photos/400/300' />
            <ProjectCard imgUrl='https://picsum.photos/400/300' />
            <ProjectCard imgUrl='https://picsum.photos/400/300' />
            <ProjectCard imgUrl='https://picsum.photos/400/300' />
        </div>
    </div>
  )
}

export default Projects