import React from 'react'
import Layout from '../components/layout'
import skillsStyles from './skills.module.css'
import SEO from "../components/seo"
import { FaMobileAlt, FaDesktop, FaGlobe, FaBrain} from 'react-icons/fa'

const Skills = () => (
    <Layout>
        {/* <div className={skillsStyles.splash}>
            <h1 className={skillsStyles.fade}>Bereket Degefa</h1>
        </div> */}
        <SEO title="Skills" />
        <div className={skillsStyles.wrapper}>
            <p className={skillsStyles.title}>MY skills</p>
            <div className={skillsStyles.top}>
                <div className={skillsStyles.skill}>
                    <div>
                        <FaMobileAlt className={skillsStyles.skillIcons} />
                    </div>

                    <h4>Languages</h4>
                    <li>Flutter</li>
                    <li>Swift</li>

                    <h4>Dev Tools</h4>
                    <li>Figma</li>
                    <li>Adobe Xd</li>
                    <li>Visual Studio</li>
                    <li>Xcode</li>
                </div>
                <div className={skillsStyles.skill}>
                    <div>
                        <FaGlobe className={skillsStyles.skillIcons} />
                    </div>
                    <h4>Languages</h4>
                    <li>HTML\CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Gatsby</li>

                    <h4>Dev Tools</h4>
                    <li>Figma</li>
                    <li>Github</li>
                    <li>Visual Code</li>
                </div>
                <div className={skillsStyles.skill}>
                    <div >
                        <FaDesktop className={skillsStyles.skillIcons} />
                    </div>
                    <h4>Languages</h4>
                    <li>Java</li>
                    <li>C#</li>

                    <h4>Dev Tools</h4>
                    <li>Figma</li>
                    <li>HeidiSQL</li>
                    <li>Visual Studio</li>

                </div>
            </div>
            <div className={skillsStyles.bottom}>
                <div className={skillsStyles.people}>
                    <div>
                        <FaBrain className={skillsStyles.skillIcons} />
                    </div>

                    <li>Efficient and effective communicator</li>
                    <li>Team player</li>
                    <li>Self-organized and able to work independently</li>
                    <li>Always curious, humble and courageous</li>
                    <li>Open to receive and deliver clear and useful criticism</li>
                    <li>Eager to Learn and Adaprt swiftly</li>
                </div>
            </div>
        </div>
    </Layout>
)

export default Skills