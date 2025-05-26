import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import ContactComponent from "../components/contact-component";
import styles from "../page.module.css";

interface PageProps {}

const Contact: FunctionComponent<PageProps> = () => {
  return (
    <div className={styles.projectpage}>
      <ContactComponent></ContactComponent>
    </div>
  );
};

export default Contact;
