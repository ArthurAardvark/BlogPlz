import React from 'react'

import { Helmet } from 'react-helmet'

import Image from '../components/image'
import styles from './image02.module.css'

const Image02 = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className={styles['dummy-container']}>
        <Image></Image>
      </div>
    </div>
  )
}

export default Image02
