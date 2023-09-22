import React from 'react'
import Upper_footer from './Upper_footer'
import Lower_footer from './Lower_footer'
import {motion} from 'framer-motion'

function Footer(props) {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
        <Upper_footer/> 
      </motion.div>
      <Lower_footer india_entry_strat_active_footer = {props.india_entry_strat_active} india_subsidiary_active_footer = {props.india_subsidiary_active} subsidiary_support_active_footer ={props.subsidiary_support_active} india_peo_active_footer ={props.india_peo_active} small_business_active_footer={props.small_business_active} our_company_active_footer={props.our_company_active} our_leadership_active_footer ={props.our_leadership_active_footer} our_execution_active_footer={props.our_execution_active} local_expertise_active_footer ={props.local_expertise_active} work_active_footer={props.work_active} resources_center_active_footer={props.resources_center_active} contact_us_active_footer={props.contact_us_active} policy_active_footer={props.policy_active} disclaimer_active_footer={props.disclaimer_active}/>
    </div>
  )
}

export default Footer
