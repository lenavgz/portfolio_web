'use client';

import React, { useRef } from 'react';
import styles from './../page.module.css';
import { Center, Text } from '@mantine/core';
import { motion } from 'framer-motion';

export default function StartComponent() {
  const containerRef = useRef(null);

  return (
    <div className={styles.home}>
      <Center className={styles.hearo}>
        <div  ref={containerRef} className={styles.canvasContainer}>
        <div className={styles.containerText}>
          <Text className={styles.textstart}>
            Hey, <br/> I am passionate about exploring ideas through sketching,
            prototypes, and human-centered design.
          </Text>
          </div>

          <motion.img
            src="/assets/basketball.png"
            alt="Basketball"
            className={styles.sticker}
            style={{ top: '30%', left: '4%' }}
            drag
            dragMomentum={false}
            dragConstraints={containerRef}
            whileTap={{ scale: 0.9 }}
          />

          <motion.img
            src="/assets/portrait.png"
            alt="Portrait"
            className={styles.sticker}
            style={{ top: '250px', left: '80%' }}
            drag
            dragMomentum={false}
            dragConstraints={containerRef}
            whileTap={{ scale: 0.9 }}
          />

<motion.img
            src="/assets/Sticker.png"
            alt="Portrait"
            className={styles.sticker}
            style={{ top: '10%', left: '70%' }}
            drag
            dragMomentum={false}
            dragConstraints={containerRef}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </Center>
    </div>
  );
}
