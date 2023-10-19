import React, {FunctionComponent, PropsWithChildren} from "react";
import styles from "./NamedList.module.css";

export interface NamedListProps extends PropsWithChildren {
  title: string
}

export const NamedList: FunctionComponent<NamedListProps> = async ({ title, children }) => {
  return (
    <section className={styles.section}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {children}
      </ul>
    </section>
  )
}