import { FC } from "react";
import { property } from "../../constants/property";
import styles from './header.module.css';

export const Header: FC<JSX.IntrinsicElements['header']> = (props) => {
    const { name, id, background } = property;
    return (
        <header {...props}>
            <p className={styles.id}>ID: {id}</p>
            <h1 className={styles.title}>{name}</h1>
            <img className={styles.img} src={background} alt={name} />
            <div className={styles.fader} />
        </header>
    )
}