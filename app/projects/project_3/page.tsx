"use client";
import styles from './../page.module.css'
import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link';
import { Center, Divider, NavLink, Stack } from '@mantine/core';
import { IconArrowUpRight, IconDownload } from '@tabler/icons-react';
import ProjectComponent from '../project-component';
import NavComponent from '@/app/components/nav-component';
import { Button, Flex, Group, Image, Text } from '@mantine/core'
import project_1 from './../../../assets/motion_4.png'
import project_11 from './../../../assets/motion_2.png'
import project_12 from './../../../assets/motion_3.png'


import NextImage from "next/image"
import Vimeo from '@u-wave/react-vimeo';



interface PageProps {}

const Dashboard: FunctionComponent<PageProps> = () => {

const [testVariable, setTestVar] = useState("About me_1");

  return (
    <div className={styles.projectpage}>
    <Center>
    <NavComponent ></NavComponent>

    </Center>

    <Center>
    <Image
          component={NextImage}
          alt="project image"
          radius="md"
          className={styles.imagebigbachelor}
          src={project_1}
        />

      </Center>
    <br />
    <Center>
      <Stack className={styles.info} justify="flex-start" gap="xs">
      <Text className={styles.projname}><strong>KINO TEASER</strong></Text>
      <Group justify="space-between" className={styles.info} grow gap="xs">
        <div className={styles.infolist}>
          <Stack gap="xs">
            <Text className={styles.headlineinfo}><strong>info</strong></Text>
            <Group justify="space-between">
              <Text className={styles.textblue}>year</Text>
              <Text className={styles.textblue}>2023</Text>
            </Group>
            <Divider className={styles.dividerinfo} my="sm" />
            <Group justify="space-between">
              <Text className={styles.textblue}>role</Text>
              <Text className={styles.textblue}>Animation</Text>
            </Group>              
            <Divider className={styles.dividerinfo} my="sm" />
            <Group justify="space-between">
              <Text className={styles.textblue}>tools</Text>
              <Text className={styles.textblue}>Adobe Aftereffects</Text>
            </Group>
          </Stack>
        </div>
        <div>
          <Text className={styles.headlineinfo}><strong>about</strong></Text>
          <Text className={styles.textblue}>
            Project for the course Motion Graphics at the Augsburg University of Applied Sciences. The task was to animate a teaser for a movie night organized by the faculty of design.
          </Text>
        </div>
      </Group>
      <Center>
      <Vimeo
          video="https://vimeo.com/973230925?share=copy"
          width={640}
          height={360}
          className={styles.vimeoVideo}
        />
      </Center>
      <Group grow className={styles.grouppictures}>

        <Image
          component={NextImage}
          alt="project image"
          radius="md"
          className={styles.pictureshow}
          src={project_12}
        />
        <Image
          component={NextImage}
          alt="project image"
          radius="md"
          className={styles.pictureshow}
          src={project_11}
        />
      </Group>
        

      </Stack>
    </Center>
  </div>
  )
  
}

export default Dashboard;