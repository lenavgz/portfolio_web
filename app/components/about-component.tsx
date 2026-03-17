"use client";

import React from "react";
import styles from "./../page.module.css";
import Link from "next/link";
import { Anchor, Button, Center, Group, Stack, Image, Text, Box, Title } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import contactbubble from "./../../assets/contact.png";
import NextImage from "next/image";

export default function AboutComponent() {
  return (
    <div className={styles.componentpage} id="about">
      <Center>
        <Stack gap="xl" align="center" style={{ maxWidth: '800px', textAlign: 'center' }}>
          {/* Social & Contact Group */}
          <Stack gap="xs" align="center" mt="xl">
            <Text fw={700} size="sm" tt="uppercase" lts="1px" c="dimmed">
              Let us Connect
            </Text>
            <Group gap="lg">
              <Anchor
                className={styles.email}
                href="mailto:hello@lenavogentanz.de"
                underline="hover"
              >
                Email
              </Anchor>
              
              <Anchor
                className={styles.email}
                href="https://www.linkedin.com/in/YOUR-PROFILE" 
                target="_blank"
                underline="hover"
              >
                LinkedIn
              </Anchor>
            </Group>
          </Stack>

        </Stack>
      </Center>
    </div>
  );
}