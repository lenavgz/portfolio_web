"use client";
import styles from "./page.module.css";
import Link from "next/link";
import {
  Button,
  Center,
  Divider,
  Group,
  NavLink,
  Stack,
  Space,
  Text,
} from "@mantine/core";
import myImage from "@/assets/Bildschirmfoto 2023-11-14 um 08.31.11.png";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import StartComponent from "./components/start-component";
import NavComponent from "./components/nav-component";
import ContactComponent from "./components/contact-component";
import DashboardComponent from "./components/dashboard-component";
import AboutComponent from "./components/about-component"

interface PageProps {}

export default function Home() {
  return (
    <div className={styles.home}>
<Stack gap="100px"> {/* Standardizes gaps between all children */}
        <div id="home"><StartComponent /></div>
        <div id="projects"><DashboardComponent /></div>
        <div id="about"><AboutComponent /></div>
        <Space h="100px" /> {/* Extra custom space at the very bottom */}
      </Stack>
    </div>
  );
}