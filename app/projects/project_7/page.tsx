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
import { CardsCarousel } from "../../components/cards-component";
import '@mantine/carousel/styles.css';
import img1 from "../../../public/assets/skizzenbuch/1.png";
import img2 from "../../assets/skizzenbuch/2.png";
import img3 from "../../assets/skizzenbuch/3.png";
import img4 from "../../assets/skizzenbuch/4.png";
import img5 from "../../assets/skizzenbuch/5.png";
import img6 from "../../assets/skizzenbuch/6.png";
import img7 from "../../assets/skizzenbuch/7.png";
import img8 from "../../assets/skizzenbuch/8.png";
import img9 from "../../assets/skizzenbuch/9.png";
import img10 from "../../assets/skizzenbuch/10.png";
import img11 from "../../assets/skizzenbuch/11.png";
import img12 from "../../assets/skizzenbuch/12.png";
import img13 from "../../assets/skizzenbuch/13.png";
import img14 from "../../assets/skizzenbuch/14.png";
import img15 from "../../assets/skizzenbuch/15.png";
import img16 from "../../assets/skizzenbuch/16.png";
import img17 from "../../assets/skizzenbuch/17.png";
import img18 from "../../assets/skizzenbuch/18.png";
import img19 from "../../assets/skizzenbuch/19.png";
import img20 from "../../assets/skizzenbuch/20.png";
import img21 from "../../assets/skizzenbuch/21.png";
import img22 from "../../assets/skizzenbuch/22.png";
import img23 from "../../assets/skizzenbuch/23.png";
import img24 from "../../assets/skizzenbuch/24.png";
import img25 from "../../assets/skizzenbuch/25.png";
import img26 from "../../assets/skizzenbuch/26.png";


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
      

      <br />
      <Center>
        <Stack className={styles.info} gap="xs">
          <Text className={styles.projname}>
            <strong>Skizzenuch</strong>
          </Text>
        
          <div style={{ paddingBottom: '10rem' }}>
  <CardsCarousel />
</div>        </Stack>
      </Center>
    </div>
  );
};

export default Dashboard;
