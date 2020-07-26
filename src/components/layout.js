import React from "react"
import { Link } from "gatsby"
import layoutStyles from './layout.module.css'
import Image from './image'
import '../global.css'
import { FaGithub, FaTwitter, FaEnvelope, FaFutbol, FaTableTennis } from 'react-icons/fa';

const Layout = ({ children }) => {

  return (
    <div className={layoutStyles.wrapper}>
      <div className={layoutStyles.left}>
        <div className={layoutStyles.avatar}>
          <Image />
        </div>
        <h3 className={layoutStyles.name}>Bereket Degefa</h3>
        <ul>
          <li>software developer</li>
          <li>|</li>
          <li>tech enthusiast</li>
        </ul>

        <div className={layoutStyles.hobby}>
          <li><FaFutbol /></li>
          <li><FaTableTennis /></li>
        </div>

        <div className={layoutStyles.nav}>
          <li>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }} activeStyle={{ color: 'red' }}>
              skills
              </Link>
          </li>
          <li>
            <Link to='/education' style={{ textDecoration: 'none', color: 'white' }} activeStyle={{ color: 'red' }}>
              education
              </Link>
          </li>
          <li>
            <Link to='/projects' style={{ textDecoration: 'none', color: 'white' }} activeStyle={{ color: 'red' }}>
              portfolio
              </Link>
          </li>

        </div>
        
        <div className={layoutStyles.about}>
          <h3>ABOUT ME</h3>
          <p>I am a software developer who enjoys creating and improving technologies (all sorts of applications). When I am not teching I love playing soccer and ping pong.</p>
        </div>

        <footer >
          <div className={layoutStyles.footer}>
            <a href="https://www.github.com/bherekhet" aria-label="github"><FaGithub /></a>
            <a href="mailto:bereket.degefa@gmail.com" aria-label="email"><FaEnvelope /></a>
            <a href="https://www.twitter.com" aria-label="twitter"><FaTwitter /></a>
          </div>

        </footer>
      </div>

      <div className={layoutStyles.right}>
        {children}
      </div>
    </div>

  )
}


export default Layout
