"use client";
import styles from "./../page.module.css";
import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { Center, Divider, NavLink, Stack } from "@mantine/core";
import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import ProjectComponent from "../project-component";
import NavComponent from "@/app/components/nav-component";
import { Button, Flex, Group, Image, Text } from "@mantine/core";
import bachelor_1 from "./../../../assets/Feed_frame.png";
import bachelor_2 from "./../../../assets/Frame 2.png";
import bachelor_3 from "./../../../assets/REcipes.png";
import bachelor_5 from "./../../../assets/Frame 4.png";
import bachelor_4 from "./../../../assets/Blue and Green Minimalist Modern Clothing Brand Board.png";
import bachelor_6 from "./../../../assets/app_mockup.png";

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
          src={bachelor_3}
        />
      </Center>

      <br />
      <Center>
        <Stack className={styles.info} gap="xs">
          <Text className={styles.projname}>
            <strong>Skizzenuch</strong>
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
                  <Text className={styles.textblue}>App Design</Text>
                </Group>
                <Divider className={styles.dividerinfo} my="sm" />
                <Group justify="space-between">
                  <Text className={styles.textblue}>tools</Text>
                  <Text className={styles.textblue}>Figma</Text>
                </Group>
              </Stack>
            </div>
            <div className={styles.infolist}>
              <Text className={styles.headlineinfo}>
                <strong>about</strong>
              </Text>
              <Text className={styles.textblue}>
                App-Design for young home cooks: Encourages creativity, variety,
                and social interaction through gamified cooking challenges.{" "}
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
                  I designed an app concept that turns home cooking into a fun,
                  interactive challenge—designed to inspire young people to cook
                  more creatively.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>Why?</strong>
                </Text>
                <Text className={styles.whattext}>
                  Many young adults tend to cook the same simple meals (like
                  pasta with pesto) and often lack motivation or inspiration to
                  try new recipes. This project aims to make cooking more
                  engaging by adding social interaction and gamification,
                  encouraging users to try diverse dishes and enjoy the process.
                </Text>
                <Text className={styles.whatheadline}>
                  <strong>How?</strong>
                </Text>
                <Text className={styles.whattext}>
                  The app challenges users to recreate a visually appealing dish
                  based on a photo. Users upload a picture of their own result
                  and share it on an in-app feed, where friends can rate them,
                  and send new challenges. Through interactive features like
                  direct challenges, and ranking systems, the app turns cooking
                  into a game-like experience that promotes cooking at home,
                  trying new things, and social engagement.
                </Text>
              </Stack>
            </div>
            <div className={styles.infolist}>
              <Image
                component={NextImage}
                alt="project image"
                radius="md"
                style={{ maxHeight: "60vh", width: "auto" }}
                src={bachelor_4}
              />
            </div>
          </Group>

          <Center className={styles.picturesextra}>
            <Image
              component={NextImage}
              alt="project image"
              radius="md"
              style={{ maxHeight: "40vh", width: "auto" }}
              src={bachelor_6}
            />
            <Image
              component={NextImage}
              alt="project image"
              radius="md"
              style={{ maxHeight: "40vh", width: "auto" }}
              src={bachelor_1}
            />
            <Image
              component={NextImage}
              alt="project image"
              radius="md"
              style={{ maxHeight: "40vh", width: "auto" }}
              src={bachelor_5}
            />
          </Center>
        </Stack>
      </Center>
    </div>
  );
};

export default Dashboard;
