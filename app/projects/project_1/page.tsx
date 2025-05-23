"use client";
import styles from './../page.module.css'
import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link';
import { Center, Divider, NavLink, Stack } from '@mantine/core';
import { IconArrowUpRight, IconDownload } from '@tabler/icons-react';
import ProjectComponent from '../project-component';
import NavComponent from '@/app/components/nav-component';
import { Button, Flex, Group, Image, Text } from '@mantine/core'
import project_1 from './../../../assets/project_1.jpg'
import project_11 from './../../../assets/project_1.1.jpg'
import project_12 from './../../../assets/project_1.2.png'


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

    <br />
    <Center>
      <Stack className={styles.info} justify="flex-start" gap="xs">
      <Text className={styles.projname}><strong>SPACE 3D</strong></Text>
      <Group justify="space-between" className={styles.info} grow gap="xs">
        <div className={styles.infolist}>
          <Stack gap="xs">
            <Text className={styles.headlineinfo}><strong>info</strong></Text>
            <Group justify="space-between">
              <Text className={styles.textblue}>year</Text>
              <Text className={styles.textblue}>2022</Text>
            </Group>
            <Divider className={styles.dividerinfo} my="sm" />
            <Group justify="space-between">
              <Text className={styles.textblue}>role</Text>
              <Text className={styles.textblue}>3D Animation</Text>
            </Group>              
            <Divider className={styles.dividerinfo} my="sm" />
            <Group justify="space-between">
              <Text className={styles.textblue}>tools</Text>
              <Text className={styles.textblue}>Maya</Text>
            </Group>
          </Stack>
        </div>
        <div>
          <Text className={styles.headlineinfo}><strong>about</strong></Text>
          <Text className={styles.textblue}>
            Semester project Interactive Media Basics of 3D Animation at the Augsburg University of Applied Sciences. The task was to animate a space scene using Maya.
          </Text>
        </div>
      </Group>

      <Center>
        <Vimeo
          video="https://vimeo.com/973237928?share=copy"
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