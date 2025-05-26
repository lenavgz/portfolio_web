"use client";
import styles from "./../page.module.css";
import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { Center, Divider, NavLink, Stack } from "@mantine/core";
import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import ProjectComponent from "../project-component";
import NavComponent from "@/app/components/nav-component";
import { Button, Flex, Group, Image, Text } from "@mantine/core";
import bachelor_1 from "./../../../assets/bachelor_1.2.jpg";
import bachelor_2 from "./../../../assets/bachelor_2.2.jpg";
import bachelor_3 from "./../../../assets/bachelor_3.jpg";
import bachelor_5 from "./../../../assets/bachelor_4.jpg";
import bachelor_4 from "./../../../assets/mockup_imac.jpg";

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
          src={bachelor_2}
        />
      </Center>

      <br />
      <Center>
        <Stack className={styles.info} gap="xs">
          <Text className={styles.projname}>
            <strong>FALSCHE WAHRHEITEN</strong>
          </Text>
          <Text className={styles.projnamesub}>
            <strong>
              – eine interaktive Anwendung zur Enthüllung der Macht von
              Bildmanipulation
            </strong>
          </Text>
          <Group className={styles.what} grow gap="xs">
            <div className={styles.infolist}>
              <Stack gap="xs">
                <Text className={styles.headlineinfo}>
                  <strong>info</strong>
                </Text>

                <Group justify="space-between">
                  <Text className={styles.textblue}>year</Text>
                  <Text className={styles.textblue}>2025</Text>
                </Group>
                <Divider className={styles.dividerinfo} my="sm" />
                <Group justify="space-between">
                  <Text className={styles.textblue}>role</Text>
                  <Text className={styles.textblue}>
                    3D, Interaction Design, Interface Design, Prototyping
                  </Text>
                </Group>
                <Divider className={styles.dividerinfo} my="sm" />
                <Group justify="space-between">
                  <Text className={styles.textblue}>tools</Text>
                  <Text className={styles.textblue}>Spline, Framer</Text>
                </Group>
              </Stack>
            </div>
            <div className={styles.infolist}>
              <Text className={styles.headlineinfo}>
                <strong>about</strong>
              </Text>
              <Text className={styles.textblue}>
                Awareness-driven interactive application for media literacy:
                Demonstrates the emotional and perceptual impact of image
                manipulation to foster critical visual thinking (Bachelor
                Project)
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
                src={bachelor_1}
              />
              <Image
                component={NextImage}
                alt="project image"
                radius="md"
                className={styles.pictureshow}
                src={bachelor_3}
              />
              <Image
                component={NextImage}
                alt="project image"
                radius="md"
                className={styles.pictureshow}
                src={bachelor_5}
              />
            </div>
          </Group>

          <Center className={styles.vimeoWrapper}>
            <Vimeo
              video="https://vimeo.com/1051598507?share=copy"
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
