import React from 'react'
import Upper_footer from './Upper_footer'
import Lower_footer from './Lower_footer'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
        <Upper_footer/> 
      </motion.div>
      <Lower_footer/>
    </div>
  )
}

export default Footer
