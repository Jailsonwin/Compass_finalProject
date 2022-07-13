import styles from './Clock.module.scss';

export default function Clock() {
    return(
        <div className={styles.container}>
            <h2>
                00:00
            </h2>
            <p>
                Dia-por-Extenso, 00 de mes de Ano
            </p>
        </div>
    );
}