"use client";

import styles from "./page.module.css";
import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Group,
  NavLink,
} from "@mantine/core";
import { ReactNode } from "react";
import Link from "next/link";
import { IconDownload } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import StartComponent from "./components/start-component";
import { Image, Stack, Text } from "@mantine/core";
import logo from "./../assets/f2b63fbe-95d3-40fa-8344-989dc54737c0.png";
import NextImage from "next/image";
import LogoComponent from "./components/logo-component copy";
import NavComponent from "./components/nav-component";

interface Props {
  children: ReactNode;
}

function MyAppShell({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <AppShell padding="md" withBorder={false}>
      <AppShell.Header>
        <LogoComponent></LogoComponent>
      </AppShell.Header>

      <AppShell.Main className={styles.app}>
        <Center>
          <NavComponent></NavComponent>
        </Center>

        {children}
      </AppShell.Main>

      <AppShell.Footer></AppShell.Footer>
    </AppShell>
  );
}

export default MyAppShell;
