"use client";
import styles from "./../page.module.css";
import React, { FunctionComponent, useState } from "react";
import { Center, Divider, NavLink, Stack } from "@mantine/core";
import NavComponent from "@/app/components/nav-component";
import { Button, Flex, Group, Image, Text } from "@mantine/core";
import project_1 from "./../../../assets/project_1.jpg";
import project_11 from "./../../../assets/project_1.1.jpg";
import project_12 from "./../../../assets/project_1.2.png";

import NextImage from "next/image";
import Vimeo from "@u-wave/react-vimeo";

interface PageProps {}

const Dashboard: FunctionComponent<PageProps> = () => {
  const [testVariable, setTestVar] = useState("About me_1");

  return (
    <div className={styles.projectpage}>
      <Center>
        <NavComponent></NavComponent>
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
        <Stack className={styles.info} gap="xs">
          <Text className={styles.projname}>
            <strong>SPACE 3D</strong>
          </Text>
          <Group className={styles.what} grow gap="xs">
            <div className={styles.infolist}>
              <Stack gap="xs">
                <Text className={styles.headlineinfo}>
                  <strong>info</strong>
                </Text>
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
            <div className={styles.infolist}>
              <Text className={styles.headlineinfo}>
                <strong>about</strong>
              </Text>
              <Text className={styles.textblue}>
                Semester project Interactive Media Basics of 3D Animation at the
                Augsburg University of Applied Sciences. The task was to animate
                a space scene using Maya.
              </Text>
            </div>
          </Group>

          <Group className={styles.what} grow gap="xs">
            <div className={styles.infolist}>
              <Stack gap="s" className={styles.whatlist}>
                <Text className={styles.whatheadline}>
                  <strong>What?</strong>
                </Text>
                <Text className={styles.whattext}>
                  A short 3D-animated clip showing a spaceship landing in a
                  stylized space environment.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>Why?</strong>
                </Text>
                <Text className={styles.whattext}>
                  The project was created as an introduction to 3D modeling and
                  animation, with the goal of understanding basic techniques
                  such as asset creation, lighting, and movement
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>How?</strong>
                </Text>
                <Text className={styles.whattext}>
                  I designed and modeled all assets from scratch, applied
                  textures and lighting to build an atmospheric space scene, and
                  animated the spaceship’s landing sequence. By experimenting
                  with acceleration and movement curves, I aimed to achieve a
                  more realistic motion. Sound effects were added to enhance
                  immersion and bring the scene to life
                </Text>
              </Stack>
            </div>
            <div className={styles.infolist}>
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
            </div>
          </Group>

          <Center className={styles.vimeoWrapper}>
            <Vimeo
              video="https://vimeo.com/973237928"
              responsive
              className={styles.vimeoVideo}
            />
          </Center>
        </Stack>
      </Center>
    </div>
  );
};

export default Dashboard;
