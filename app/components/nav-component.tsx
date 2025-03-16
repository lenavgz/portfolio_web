"use client"

import React from 'react'
import styles from './../page.module.css'
import Link from 'next/link'
import { Button, Center, Group, Text } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';


export default function NavComponent() {
  const router = useRouter();
  return (

    <Group className={styles.navigation}>
      <Button  onClick={() => router.push('/')}>HOME</Button>

      <Button onClick={() => router.push('/dashboard')}>PROJECTS</Button>
                
      <Button onClick={() => router.push('/contact')}>CONTACT</Button>
    </Group>

  )
}