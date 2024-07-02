"use client";
import styles from './../page.module.css';
import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { Center, Divider, NavLink, Stack } from '@mantine/core';
import { IconArrowUpRight, IconDownload } from '@tabler/icons-react';
import ProjectComponent from '../project-component';
import NavComponent from '@/app/components/nav-component';
import { Button, Flex, Group, Image, Text } from '@mantine/core';
import NextImage from "next/image";
import Vimeo from '@u-wave/react-vimeo';

import project_1 from './../../../assets/tigerherz_1.png';
import project_11 from './../../../assets/tigerherz_33.png';
import project_12 from './../../../assets/tigerherz_3.png';

interface PageProps {}

const Dashboard: FunctionComponent<PageProps> = () => {
  const [testVariable, setTestVar] = useState("About me_1");

  return (
    <div className={styles.projectpage}>
      <Center>
        <NavComponent></NavComponent>
      </Center>

      <Center>
        <Vimeo
          video="https://vimeo.com/907787984"
          width={640}
          height={360}
          autoplay
          className={styles.vimeoVideo}
        />
      </Center>

      <Stack className={styles.info} justify="flex-start" gap="xs">
        <Text className={styles.projname}><strong>Lonis Weltraumreise</strong></Text>
        <Group justify="space-between" className={styles.info} grow gap="xs">
          <div className={styles.infolist}>
            <Stack gap="xs">
              <Text className={styles.headlineinfo}><strong>info</strong></Text>
              <Group justify="space-between">
                <Text className={styles.textblue}>year</Text>
                <Text className={styles.textblue}>2024</Text>
              </Group>
              <Divider className={styles.dividerinfo} my="sm" />
              <Group justify="space-between">
                <Text className={styles.textblue}>role</Text>
                <Text className={styles.textblue}>Conception, Programming of interactive elements</Text>
              </Group>
              <Divider className={styles.dividerinfo} my="sm" />
              <Group justify="space-between">
                <Text className={styles.textblue}>tools</Text>
                <Text className={styles.textblue}>Figma, Java Script, Pixi.js</Text>
              </Group>
            </Stack>
          </div>
          <div>
            <Text className={styles.headlineinfo}><strong>about</strong></Text>
            <Text className={styles.textblue}>
              Semester project Interactive Media Team Project at the Augsburg University of Applied Sciences in cooperation with the Tigerherz Organisation of Uniklinikum Freiburg. As a group of ten students we developed an interactive story, to help parents suffering from cancer to tell their children about the disease and educate them about it.
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
    </div>
  );
};

export default Dashboard;
