"use client";

import React from "react";
import styles from "./../page.module.css";
import Link from "next/link";
import { Anchor, Button, Center, Group, Stack, Image } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import contactbubble from "./../../assets/contact.png";
import NextImage from "next/image";

export default function ContactComponent() {
  const router = useRouter();
  return (
    <div className={styles.componentpage}>
      <Center>
        <Stack className={styles.contactStack} justify="center" align="center">
          <Anchor
            className={styles.email}
            href="mailto:hello@lenavogentanz.de"
            target="_blank"
          >
            hello@lenavogentanz.de
          </Anchor>
          <Image
            component={NextImage}
            alt="project image"
            radius="md"
            className={styles.bubble}
            src={contactbubble}
          />
        </Stack>
      </Center>
    </div>
  );
}
