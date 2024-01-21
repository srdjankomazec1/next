import React from 'react'
import styles from '../styles/About.module.css'
const About = () => {
  return (
    <section className={styles.sec} id="about">
    <div className={styles.content}>
        <div className={styles.mxw800p}>
           <h3>Who We Are</h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis deserunt deleniti aliquam eum modi nostrum vel doloribus voluptate illum suscipit commodi, laborum impedit tenetur nihil, provident optio, itaque porro magni eveniet laboriosam expedita corporis alias! Doloremque. Expedita fuga iure, inventore vitae, harum illum, error non dicta atque recusandae quos maxime officia quas, aperiam cupiditate? Eaque inventore suscipit.</p>
            <a href="#" className={styles.btn}>Read Our Story</a>
        </div>
    </div>
    
</section>
  )
}

export default About