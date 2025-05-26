"use client";
import styles from "./../page.module.css";
import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { Center, Divider, NavLink, Stack } from "@mantine/core";
import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import ProjectComponent from "../project-component";
import NavComponent from "@/app/components/nav-component";
import { Button, Flex, Group, Image, Text } from "@mantine/core";
import NextImage from "next/image";
import Vimeo from "@u-wave/react-vimeo";

import project_1 from "./../../../assets/tigerherz_1.png";
import project_11 from "./../../../assets/tigerherz_33.png";
import project_12 from "./../../../assets/tigerherz_3.png";
import loni_1 from "./../../../assets/Loni_mockup1.png";

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
          src={loni_1}
        />
      </Center>

      <br />
      <Center>
        <Stack className={styles.info} gap="xs">
          <Text className={styles.projname}>
            <strong>Lonis Weltraumreise</strong>
          </Text>
          <Group className={styles.what} grow gap="xs">
            <div className={styles.infolist}>
              <Stack gap="xs">
                <Text className={styles.headlineinfo}>
                  <strong>info</strong>
                </Text>
                <Group justify="space-between">
                  <Text className={styles.textblue}>year</Text>
                  <Text className={styles.textblue}>2024</Text>
                </Group>
                <Divider className={styles.dividerinfo} my="sm" />
                <Group justify="space-between">
                  <Text className={styles.textblue}>role</Text>
                  <Text className={styles.textblue}>
                    Concept, Interactive elements, Design
                  </Text>
                </Group>
                <Divider className={styles.dividerinfo} my="sm" />
                <Group justify="space-between">
                  <Text className={styles.textblue}>tools</Text>
                  <Text className={styles.textblue}>
                    Figma, Java Script, Pixi.js
                  </Text>
                </Group>
              </Stack>
            </div>
            <div className={styles.infolist}>
              <Text className={styles.headlineinfo}>
                <strong>about</strong>
              </Text>
              <Text className={styles.textblue}>
                Semester project Interactive Media Team Project at the Augsburg
                University of Applied Sciences in cooperation with the Tigerherz
                Organisation of Uniklinikum Freiburg. As a group of ten students
                we developed an interactive story, to help parents suffering
                from cancer to tell their children about the disease and educate
                them about it.
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
                  We developed an interactive website that helps parents with
                  cancer explain the disease to their children in a
                  child-friendly and empathetic way.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>Why?</strong>
                </Text>
                <Text className={styles.whattext}>
                  Receiving a cancer diagnosis is a major emotional burden — not
                  only for patients, but also for their families. Many parents
                  struggle with how to talk about the illness with their
                  children in an age-appropriate and sensitive manner, and often
                  lack adequate tools or guidance.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>How?</strong>
                </Text>
                <Text className={styles.whattext}>
                  As a team, we conceptualized an interactive story that
                  explains cancer in a way children can understand. The story is
                  customizable: characters and storylines can be adapted to
                  reflect each family’s unique situation, making it easier for
                  parents to start the conversation. Small games and interactive
                  elements are integrated to help children understand what the
                  disease means and how it affects their everyday life.
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
                src={project_1}
              />
            </div>
          </Group>

          <Center className={styles.vimeoWrapper}>
            <Vimeo
              video="https://vimeo.com/907787984"
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
