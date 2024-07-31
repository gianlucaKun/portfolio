import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import './Projects.scss'

const Projects: React.FC = () => {

  const testoprogetto1 : string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eum quod maiores at quidem culpa quasi eligendi ea, consequatur nemo animi et! '
  return (
    <div className='containerProjects' id='projects'>
        <div><h2>Projects</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eum quod maiores at quidem culpa quasi eligendi ea, consequatur nemo animi et! Unde illum eos itaque repellat at tempore ducimus.</p></div>
        <div className='containerPreviewProjects'>
            <ProjectCard imgUrl='https://picsum.photos/400/300' text={testoprogetto1} link='/veryveg'/>
            <ProjectCard imgUrl='https://picsum.photos/400/300' text="lorem ipsum casuale" link='/veryveg'/>
            <ProjectCard imgUrl='https://picsum.photos/400/300' text="lorem ipsum casuale" link='/veryveg'/>
            <ProjectCard imgUrl='https://picsum.photos/400/300' text="lorem ipsum casuale" link='/veryveg'/>
            <ProjectCard imgUrl='https://picsum.photos/400/300' text="lorem ipsum casuale" link='/veryveg'/>
        </div>
    </div>
  )
}

export default Projects