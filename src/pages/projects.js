import React from 'react'
import Layout from '../components/layout'
import projectStyles from './projects.module.css'
import SEO from '../components/seo'
import HNImage from '../images/hn.png'
import TodoImage from '../images/todo.png'

const Projects = () => (
    <Layout>
        <SEO />
        <div className={projectStyles.title}>
            Projects
        </div>
        <div className={projectStyles.projects}>
            <div className={projectStyles.item}>
                <li>Hacker News Mobile Client</li>
                <li>Flutter</li>
                <img src={HNImage} alt='flutter hacker news app phone mockup'/>
                <a href='https://github.com/Bherekhet/hackernews'>View on Github</a>
            </div>
            <div className={projectStyles.item}>
                <li>Todo List App</li>
                <li>Flutter</li>
                <img src={TodoImage} alt='flutter todo app phone mockup'/>
                <a href='https://github.com/Bherekhet/todoList'>View on Github</a>
            </div>
        </div>
    </Layout>
)


export default Projects
