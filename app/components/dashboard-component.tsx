"use client"

import React from 'react'
import styles from './../page.module.css'
import Link from 'next/link'
import { Button, Center, Divider, Group, NavLink, Stack, Text } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import { IconArrowUpRight } from '@tabler/icons-react';
import NavComponent from './nav-component';


export default function DashboardComponent() {
  const router = useRouter();

  

  return (
    <div>
      <h1 className={styles.textblue}>Dashboard</h1>
      <Stack>
      <Divider my="sm" />
      <NavLink className={styles.textblue} label="LONIS WELTRAUMREISE" href='./../projects/project_4' rightSection={<IconArrowUpRight size="1rem" stroke={1.5} />} />
      <Divider my="sm" />
      <NavLink className={styles.textblue} label="HIDDEN HEAROES" href='./../projects/project_2' rightSection={<IconArrowUpRight size="1rem" stroke={1.5} />} />
      <Divider my="sm" />
      <NavLink className={styles.textblue} label="SPACE 3D" href='./../projects/project_1' rightSection={<IconArrowUpRight size="1rem" stroke={1.5} />} />
      <Divider my="sm" />
      <NavLink className={styles.textblue} label="KINO TEASER" href='./../projects/project_3' rightSection={<IconArrowUpRight size="1rem" stroke={1.5} />} />
      <Divider my="sm" />
      </Stack>
    </div>

  )
}