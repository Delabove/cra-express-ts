import React from 'react'
import { Link } from 'react-router-dom';


import styles from './styles/home.module.css'


const Home = () => {
  return (
    <div className={styles.landing}>
       <div className={styles.Main_Hero_Img} >
          <h1  className={styles.Main_Header_Title}>Header Text</h1>
        </div>
      <Link to='/table'>See Concerts </Link>
      <div className={styles.layout}>
        <ul className={styles.layout_list}>
                    <li className={styles.description}>
                    {/* <p><img width="100%" className="img" src={desc} alt="social" /></p> */}
                        <div className={styles.project_body}>Texas Fresh is a blog landing page for a ficticious local farmer. The landing page contains an eyebrow nav, navbar with 5 blog topics, 5 featured posts, an archive section, a newletter signup form, and copyright in the footer.</div>
                    </li>
                    <li className={styles.design}>
                    {/* <p><img width="110%" className="smaller-title" src={design} alt="social" /></p> */}
                    <p className={styles.project_body}> Texas Fresh blog was my first full frontend project outside of school that was assigned to me for an interview assessment!</p>
                    {/* <p><img width="100%" className="image" src={Image} alt="social" /></p> */}
                    <p className={styles.project_body}>I thoroughly enjoyed building this project. Prior to beginning, I had spent a little time learning React. I thought it would be a great project to take a deeper dive into the JavaScript library! I had no idea what I would learn during this project, but, to date, it is my favorite project. I preplanned the project using InVision. You can checkout the wireframe for Texas Fresh <a className="wireframe" href="https://projects.invisionapp.com/freehand/document/aOcwTFuN7">here</a>. I, also, created all graphics using canva pro.</p>
                    </li>
                    <li className={styles.technologies}>
                    {/* <p><img width="100%" className="img" src={technologies} alt="social" /></p> */}
                    <p className={styles.project_body}>HTML, React and Material UI</p>
                    </li>
                    <li className={styles.learns}>
                    {/* <p><img width="100%" className="smaller-title" src={learns} alt="social" /></p> */}
                    <div className={styles.project_body}> One of my favorite learns from Texas Fresh was fully experiencing the benefits of breaking down each project into components. This is a common practice with React and I can't see me structuring future personal projects any other way! The biggest "Aha!" occurred when I was creating individual objects and rendering the data into the parent component by mapping through the object data and using props to feed the fields into their respective elements. I learned so much with this project and it has helped me see how far I have come as a new developer!</div>
                    </li>
                </ul>
            </div>

    </div>
  )
}

export default Home
