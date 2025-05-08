"use client";
import styles from './../page.module.css'
import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link';
import { Center, Divider, NavLink, Stack } from '@mantine/core';
import { IconArrowUpRight, IconDownload } from '@tabler/icons-react';
import ProjectComponent from '../project-component';
import NavComponent from '@/app/components/nav-component';
import { Button, Flex, Group, Image, Text } from '@mantine/core'
import project_11 from './../../../assets/Mockup_1.png'
import project_1 from './../../../assets/Mockup_3.png'
import project_12 from './../../../assets/Designsystem.png'


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
          src={project_12}
        />
      </Center>
          <Center>

      <Stack className={styles.info} justify="flex-start" gap="xs">
      <Text className={styles.projname}><strong>HIDDEN HEAROES</strong></Text>
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
              <Text className={styles.textblue}>Interfacedesign</Text>
            </Group>              
            <Divider className={styles.dividerinfo} my="sm" />
            <Group justify="space-between">
              <Text className={styles.textblue}>tools</Text>
              <Text className={styles.textblue}>Figma, Adobe Aftereffects</Text>
            </Group>
          </Stack>
        </div>
        <div>
          <Text className={styles.headlineinfo}><strong>about</strong></Text>
          <Text className={styles.textblue}>
            Semester project Interactive Media Interfacedesign at the Augsburg University of Applied Sciences. The task was to analyze and redisign the user Interface of an electrical device from the 70s 80s 90s. ...
          </Text>
        </div>
      </Group>
      <Center>
        <Vimeo
          video="https://vimeo.com/973218475?share=copy"
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
          src={project_1}
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