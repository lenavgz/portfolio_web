"use client";

import React from "react";
import styles from "./../page.module.css";
import Link from "next/link";
import { Button, Center, Group, Text } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

export default function NavComponent() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Group className={styles.navigation}>
      <Button onClick={() => scrollToSection("home")}>
        HOME
      </Button>

      <Button  onClick={() => scrollToSection("projects")}>
        PROJECTS
      </Button>

      <Button onClick={() => scrollToSection("about")}>
        ABOUT
      </Button>
    </Group>
  );
}
