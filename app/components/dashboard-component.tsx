"use client";

import React, { useState } from "react";
import styles from "./../page.module.css";
import { Divider, NavLink } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

// Importing images
import bild_1 from "./../../assets/1.png";
import bild_2 from "./../../assets/2.png";
import bild_3 from "./../../assets/3.png";
import bild_4 from "./../../assets/4.png";
import bild_5 from "./../../assets/5.png";

export default function DashboardComponent() {
  // Store preview image state
  const [previewImage, setPreviewImage] = useState<StaticImageData | null>(null);

  // Store mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Image mapping
  const imageMap: Record<number, StaticImageData> = {
    1: bild_1,
    2: bild_2,
    3: bild_3,
    4: bild_4,
    5: bild_5,
  };

  
// Define project data with custom names
const projects = [
  { id: 1, name: "FALSCHE WAHRHEITEN", href: "./../projects/project_5", img: bild_1 },
  { id: 2, name: "LONIS WELTRAUMREISE", href: "./../projects/project_4", img: bild_2 },
  { id: 3, name: "HIDDEN HEROES", href: "./../projects/project_2", img: bild_3 },
  { id: 4, name: "SPACE 3D", href: "./../projects/project_1", img: bild_4 },
  { id: 5, name: "KINO TEASER", href: "./../projects/project_3", img: bild_5 },
];

  // Handle mouse move inside projects div
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: e.clientX + 10, // Slight offset
      y: e.clientY + 10,
    });
  };

  return (
    <div>
      <h1 className={styles.textblue}>Projects</h1>
  
      {/* Image Preview Box (Follows Mouse) */}
      {previewImage && (
        <div
          className={styles.preview}
          style={{
            transform: previewImage ? "scale(1)" : "scale(0)",
            position: "absolute",
            top: `${mousePos.y}px`,
            left: `${mousePos.x}px`,
            pointerEvents: "none", // Prevents interfering with other elements
          }}
        >
          <Image src={previewImage} alt="Preview" layout="fill" objectFit="cover" />
        </div>
      )}
  
      {/* Project Links */}
      <div
        className={styles.container}
        onMouseMove={handleMouseMove} // Track mouse movement
        onMouseLeave={() => setPreviewImage(null)} // Hide on mouse leave
      >
        {projects.map(({ id, name, href, img }, index) => (
          <React.Fragment key={id}>
            <div
              className={`${styles.textblue} ${styles.project}`}
              onMouseEnter={() => setPreviewImage(img)}
            >
              <NavLink
                className={styles.link}
                label={name}
                href={href}
                rightSection={<IconArrowUpRight size="1rem" stroke={1.5} />}
              />
            </div>
            {/* Add a divider after every project except the last one */}
            {index < projects.length - 1 && <Divider className={styles.divider} my="sm" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}  