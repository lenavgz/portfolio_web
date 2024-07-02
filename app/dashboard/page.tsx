import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link';
import ContactComponent from '../components/contact-component';
import DashboardComponent from '../components/dashboard-component';
import styles from '../page.module.css'

interface PageProps {}

const Contact: FunctionComponent<PageProps> = () => {

  return (
    <div className={styles.projectpage}>
      <DashboardComponent></DashboardComponent>
    </div>
  )
  
}

export default Contact;