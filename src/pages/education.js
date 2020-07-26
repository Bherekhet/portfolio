import React from 'react'
import Layout from '../components/layout'
import educationStyles from './education.module.css'
import SEO from '../components/seo'

const Education = () => (
    <Layout>
        <SEO title="Education" />
        <div className={educationStyles.pageTitle}>
            Education
        </div>
        <div className={educationStyles.degree}>
            <div className={educationStyles.title}>
                <span>Bachelor Degree of Computer Science</span>
            </div>
            <div className={educationStyles.group}>
                <div className={educationStyles.desc}>
                    <li>Eastern Kentucky University</li>
                    <li>Computer Science - Technology Concentration</li>
                    <li>August 2016 - May 2020</li>
                </div>
                <div className={educationStyles.gpa}>
                    <span>3.95 GPA</span>
                </div>
            </div>

            <div className={educationStyles.title}>
                <span>CYBER SYSTEMS AND NETWORK - CERTIFICATE</span>
            </div>
            <div className={educationStyles.group}>
                <div className={educationStyles.desc}>
                    <li>Eastern Kentucky University</li>
                    <li>Cyber Systems and Network Security</li>
                    <li>August 2016 - May 2020</li>
                </div>
            </div>

            <div className={educationStyles.title}>
                <span>COMPUTER ELECTRONIC TECHNOLOGY - MINOR</span>
            </div>
            <div className={educationStyles.group}>
                <div className={educationStyles.desc}>
                    <li>Eastern Kentucky University</li>
                    <li>Applied Engineering and Technology Management</li>
                    <li>August 2016 - May 2020</li>
                </div>
            </div>
            
        </div>
    </Layout>
)

export default Education