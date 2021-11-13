import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SiderBarItem({item}) {
  const { link, label, icon } = item;

  return (
    <Link href={link}>
      <a className={styles.container}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <span className={styles.label}>{label}</span>
      </a>
    </Link>
  )
}