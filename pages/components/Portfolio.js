import React from 'react'
import styles from '../styles/Portfolio.module.css'
const Portfolio = () => {
  return (
    <section className={`${styles.sec} ${styles.work}`} id="portfolio">
    <div className={styles.content}>
        <div className={styles.mxw800p}>
           <h3>Recent Work</h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis deserunt deleniti aliquam eum modi nostrum vel doloribus voluptate illum suscipit commodi, laborum impedit tenetur nihil, provident optio, itaque porro magni eveniet.</p>
         </div>
         <div className={styles.workBx}>
             <div className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
             <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
             <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
             <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
             <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
             <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
             <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
             <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
              <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
             <div  className={styles.brand}>
                 <a href="#"><h2>Brand Name</h2></a>
             </div>
         </div>
    </div>
  </section>
  )
}

export default Portfolio