"use client";
import styles from "./../page.module.css";
import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { Center, Divider, NavLink, Stack } from "@mantine/core";
import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import ProjectComponent from "../project-component";
import NavComponent from "@/app/components/nav-component";
import { Button, Flex, Group, Image, Text } from "@mantine/core";
import project_1 from "./../../../assets/motion_4.png";
import project_11 from "./../../../assets/motion_2.png";
import project_12 from "./../../../assets/motion_3.png";

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
          src={project_1}
        />
      </Center>

      <br />
      <Center>
        <Stack className={styles.info} gap="xs">
          <Text className={styles.projname}>
            <strong>KINO TEASER</strong>
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
                  <Text className={styles.textblue}>Animation</Text>
                </Group>
                <Divider className={styles.dividerinfo} my="sm" />
                <Group justify="space-between">
                  <Text className={styles.textblue}>tools</Text>
                  <Text className={styles.textblue}>Adobe Aftereffects</Text>
                </Group>
              </Stack>
            </div>
            <div className={styles.infolist}>
              <Text className={styles.headlineinfo}>
                <strong>about</strong>
              </Text>
              <Text className={styles.textblue}>
                Project for the course Motion Graphics at the Augsburg
                University of Applied Sciences. The task was to animate a teaser
                for a movie night organized by the faculty of design.
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
                  An animated short clip using typography to promote a
                  student-organized cinema night at the university.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>Why?</strong>
                </Text>
                <Text className={styles.whattext}>
                  The goal of the project was to learn the basics of 2D
                  animation and to create an engaging, energetic teaser that
                  speaks directly to a student audience and motivates them to
                  attend the event.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>How?</strong>
                </Text>
                <Text className={styles.whattext}>
                  I animated dynamic typography synchronized with an upbeat
                  soundtrack, using vivid colors and fast-paced transitions to
                  grab attention. By working with motion curves and
                  acceleration, the text movement was matched to the rhythm of
                  the music, creating an energetic and cohesive visual
                  experience that appeals to the student target group
                </Text>
              </Stack>
            </div>
            <div className={styles.infolist}>
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
            </div>
          </Group>

          <Center className={styles.vimeoWrapper}>
            <Vimeo
              video="https://vimeo.com/973230925?share=copy"
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
