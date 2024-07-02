import React from 'react'
import { Button, Center, Divider, Flex, Group, Image, Stack, Text } from '@mantine/core'
import project_1 from './../../assets/project_1.jpg'
import project_11 from './../../assets/project_1.1.jpg'
import project_12 from './../../assets/project_1.2.png'


import NextImage from "next/image"
import styles from './page.module.css'
import NavComponent from '../components/nav-component'

export default function ProjectComponent() {
  return (
    <div className={styles.projectpage}>
      <Center>
      <NavComponent ></NavComponent>

      </Center>

        <Image
            component={NextImage}
            alt="project image"
            radius="md"
            src={project_1}
            className={styles.imagebig}
          />
      <br />
      <Center>
        <Stack className={styles.info} justify="flex-start" gap="xs">
        <Text className={styles.projname}><strong>SPACE</strong></Text>
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
              Semester project Interactive Media Basics of 3D Animation at the Augsburg University of Applied Sciences. The task was to animate a space scene using Maya. ...
            </Text>
          </div>
        </Group>
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
