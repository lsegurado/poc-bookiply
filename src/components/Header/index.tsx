import { FC } from "react";
// import background from '../../assets/background.png';
// import styles from './header.module.css';

export const Header: FC<JSX.IntrinsicElements['header']> = (props) => {
    const propertyName = 'La Casa de las Flores';
    const propertyId = '091021';
    return (
        <header {...props}>
            ID: {propertyId}
            <h1>{propertyName}</h1>
            {/* <img className={styles.fader} src={background} alt={propertyName} />
            <div className={styles.fader} /> */}
        </header>
    )
}