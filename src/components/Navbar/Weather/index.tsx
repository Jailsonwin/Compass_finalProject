import styles from './Weather.module.scss';
import cloud from 'assets/cloud.svg';

export default function Weather() {
    return(
        <div className={styles.container}>
            <h3>
                Papanduva - SC
            </h3>
            <div className={styles.temp}>
                <img src={cloud} alt="Cloud" />
                <h2>
                    19º
                </h2>
            </div>
        </div>
    );
}