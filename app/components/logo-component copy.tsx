"use client";

import React from "react";
import styles from "./../page.module.css";
import Link from "next/link";
import { Button, Center, Group, Text } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import StartComponent from "./start-component";
import { Image, Stack } from "@mantine/core";
import logo from "./../../assets/f2b63fbe-95d3-40fa-8344-989dc54737c0.png";
import NextImage from "next/image";

export default function LogoComponent() {
  const router = useRouter();
  return (
    <div>
      <Center>
        <Image
          component={NextImage}
          alt="project image"
          radius="md"
          src={logo}
          w={50}
          h={50}
          className={styles.logo}
        />
      </Center>
    </div>
  );
}
