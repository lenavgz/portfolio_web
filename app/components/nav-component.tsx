"use client";

import React from "react";
import styles from "./../page.module.css";
import Link from "next/link";
import { Button, Center, Group, Text } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
  
export default function NavComponent() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (id: string) => {
    // Prüfen, ob wir auf der Home-Seite (/) sind
    if (pathname !== "/") {
      // Wenn wir auf einer Unterseite sind: Zurück zur Home + Anker
      router.push(`/#${id}`);
    } else {
      // Wenn wir auf Home sind: Smooth Scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Group className={styles.navigation}>
      <Button onClick={() => handleNav("home")}>
        HOME
      </Button>

      <Button onClick={() => handleNav("projects")}>
        PROJECTS
      </Button>

      <Button onClick={() => handleNav("about")}>
        ABOUT
      </Button>
    </Group>
  );
}