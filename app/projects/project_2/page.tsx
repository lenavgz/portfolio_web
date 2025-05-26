"use client";
import styles from "./../page.module.css";
import React, { FunctionComponent, useState } from "react";
import { Center, Divider, NavLink, Stack } from "@mantine/core";
import NavComponent from "@/app/components/nav-component";
import { Button, Flex, Group, Image, Text } from "@mantine/core";
import project_11 from "./../../../assets/Mockup_1.png";
import project_1 from "./../../../assets/Mockup_3.png";
import project_12 from "./../../../assets/Designsystem.png";

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
      <Center>
        <Stack className={styles.info} gap="xs">
          <Text className={styles.projname}>
            <strong>HIDDEN HEAROES</strong>
          </Text>
          <Group className={styles.what} grow gap="xs">
            <div className={styles.infolist}>
              <Stack gap="xs">
                <Text className={styles.headlineinfo}>
                  <strong>info</strong>
                </Text>
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
                  <Text className={styles.textblue}>
                    Figma, Adobe Aftereffects
                  </Text>
                </Group>
              </Stack>
            </div>
            <div className={styles.infolist}>
              <Text className={styles.headlineinfo}>
                <strong>about</strong>
              </Text>
              <Text className={styles.textblue}>
                Semester project Interactive Media Interfacedesign at the
                Augsburg University of Applied Sciences. The task was to analyze
                and redisign the user Interface of an electrical device from the
                70s 80s 90s.
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
                  I designed a user interface concept for a high-quality sound
                  app inspired by the look and functionality of an analog sound
                  system from the late 1970s.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>Why?</strong>
                </Text>
                <Text className={styles.whattext}>
                  Analog electronic devices from the 60s, 70s, and 80s are often
                  both functionally and aesthetically fascinating. Their tactile
                  quality and clear interface logic offer a strong contrast to
                  today’s often abstract digital designs. This project explores
                  how those qualities can inform and inspire contemporary
                  digital interfaces.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>How?</strong>
                </Text>
                <Text className={styles.whattext}>
                  Using the WEGA Concept 51K by Hartmut Esslinger (1979) as a
                  reference, I created a modular app design that mirrors the
                  structure and visual language of the original device. The
                  application is divided into three main sections—Song & Volume,
                  Sound, and Radio—reflecting the modular setup of the hardware.
                  Interface elements like the volume dial and radio scale were
                  directly inspired by their analog counterparts to evoke a
                  sense of nostalgia while ensuring intuitive usability.
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
              video="https://vimeo.com/973218475?share=copy"
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
