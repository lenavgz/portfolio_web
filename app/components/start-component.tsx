import React from 'react'
import styles from './../page.module.css'
import Link from 'next/link'
import { Button, Center, Group, Stack, Text } from '@mantine/core';
import NavComponent from './nav-component';
import LogoComponent from './logo-component copy';

export default function StartComponent() {
  return (
    <div>
      <Center className={styles.hearo}>

        <Stack>
            <Text className={styles.textstart} size="xl" fw={900}>HEY!<br />WELCOME TO MY PORTFOLIO</Text>
        </Stack>

      </Center>
      <br />
    </div>
  )
}