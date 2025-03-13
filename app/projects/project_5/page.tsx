"use client";
import styles from './../page.module.css'
import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link';
import { Center, Divider, NavLink, Stack } from '@mantine/core';
import { IconArrowUpRight, IconDownload } from '@tabler/icons-react';
import ProjectComponent from '../project-component';
import NavComponent from '@/app/components/nav-component';
import { Button, Flex, Group, Image, Text } from '@mantine/core'
import bachelor_1 from './../../../assets/bachelor_1.2.jpg'
import bachelor_2 from './../../../assets/bachelor_2.2.jpg'
import bachelor_3 from './../../../assets/bachelor_3.jpg'
import bachelor_5 from './../../../assets/bachelor_4.jpg'
import bachelor_4 from './../../../assets/mockup_imac.jpg'

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
          src={bachelor_2}
          className={styles.imagebigbachelor}
        />
    </Center>
      
    <Center>
      <Stack className={styles.info} justify="flex-start" gap="xs">
      <Text className={styles.projname}><strong>FALSCHE WAHRHEITEN</strong></Text>
      <Text className={styles.projnamesub}><strong>– eine interaktive Anwendung zur Enthüllung der Macht von Bildmanipulation</strong></Text>
      <Group justify="space-between" align="start" className={styles.info} grow gap="xs">
        <div className={styles.infolist}>
          <Stack gap="xs">
            <Text className={styles.headlineinfo}><strong>info</strong></Text>
            <Group justify="space-between">
              <Text className={styles.textblue}>year</Text>
              <Text className={styles.textblue}>2025</Text>
            </Group>
            <Divider className={styles.dividerinfo} my="sm" />
            <Group justify="space-between">
              <Text className={styles.textblue}>role</Text>
              <Text className={styles.textblue}>3D, Interaction Design, Interface Design, Prototyping</Text>
            </Group>              
            <Divider className={styles.dividerinfo} my="sm" />
            <Group justify="space-between">
              <Text className={styles.textblue}>tools</Text>
              <Text className={styles.textblue}>Spline, Framer</Text>
            </Group>
          </Stack>
        </div>
        <div>
          <Text className={styles.headlineinfo}><strong>about</strong></Text>
          <Text className={styles.textblue}>
          In meiner Bachelorarbeit befasse ich mich mit den Auswirkungen von Bildmanipulation auf die öffentliche Wahrnehmung. In einer zunehmend visuell geprägten Medienlandschaft spielen Bilder in der Vermittlung von Informationen eine wichtige Rolle und haben aufgrund ihrer ausgeprägten emotionalen Wirkung einen starken Einfluss auf uns. Manipulierte Bilder, vor allem in sozialen Medien, können Falschinformationen verbreiten und das Vertrauen in visuelle Medien untergraben.
          Um diesem Problem entgegenzuwirken, entwickelte ich die interaktive Anwendung Falsche Wahrheiten. Diese soll durch verschiedene interaktive Elemente vermitteln, wie manipulierte Bilder Emotionen und Überzeugungen beeinflussen können. Ziel ist es, das Bewusstsein für Bildmanipulation zu schärfen und kritisches Denken im Umgang mit visuellen Inhalten zu fördern.
          </Text>
        </div>
      </Group>

      <Center>
        <Vimeo
          video="https://vimeo.com/1051598507?share=copy"
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
          src={bachelor_1}
        />
        <Image
          component={NextImage}
          alt="project image"
          radius="md"
          className={styles.pictureshow}
          src={bachelor_3}
        />
      </Group>
      <Group grow className={styles.grouppictures}>
        <Image
          component={NextImage}
          alt="project image"
          radius="md"
          className={styles.pictureshow}
          src={bachelor_5}
        />
        <Image
          component={NextImage}
          alt="project image"
          radius="md"
          className={styles.pictureshow}
          src={bachelor_4}
        />
      </Group>

      </Stack>
    </Center>
  </div>
  )
  
}

export default Dashboard;