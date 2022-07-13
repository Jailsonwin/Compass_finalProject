import styles from './Clock.module.scss';
import { useEffect, useState } from 'react';

export default function Clock() {

    const [date, setDate] = useState(new Date());

    function ClockUpdate(){
        setDate(new Date());
    }

    useEffect(()=>{
        const timer = setInterval(ClockUpdate, 1000);
        return function cleanup(){
            clearInterval(timer);
        }
    },[]);

    return(
        <div className={styles.container}>
            <h2>
                {date.toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})}
            </h2>
            <p>
                {date.toLocaleDateString([], { dateStyle:"full"})}
            </p>
        </div>
    );
}