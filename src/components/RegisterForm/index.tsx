import InputEmail from '../Input/InputMail';
import InputPass from '../Input/InputPass';
import styles from './RegisterForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../common/Context/User';
import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence } from 'firebase/auth';
import { auth } from 'firebase-config';
import Check from "assets/check.svg";
import classNames from 'classnames';
import { PasswordContext } from 'common/Context/Password';

export default function RegisterForm() {
    const navigate = useNavigate();
    const { email, password, emailValid, passValid, setUser, setError } = useContext(UserContext);
    const { sixChar, lowerCase, upperCase, passNumber } = useContext(PasswordContext);
    async function register() {
        setPersistence(auth, browserLocalPersistence).then(async ()=> {
        try {
            const user =  await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate('/home');
        } catch (error: any) {
            setError(true);
        }
        })
    }
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    

    return(
        <form className={styles.form}>
            <h2>Cadastro</h2>
            <InputEmail/>
            <InputPass/>
            <div className={styles.validation} id="validation">
                <h3>A senha deve possuir:</h3>
                <div className={styles.validationCase}>
                <img src={Check} alt="OK" className={classNames({
                        [styles.okHidden]: true,
                        [styles.ok]: sixChar
                    })}/>
                    <span className={classNames({
                        [styles.spanOk]: sixChar
                    })}>No minimo 6 caracteres</span> 
                </div>
                <div className={styles.validationCase}>
                <img src={Check} alt="OK" className={classNames({
                        [styles.okHidden]: true,
                        [styles.ok]: lowerCase
                    })}/>
                    <span className={classNames({
                        [styles.spanOk]: lowerCase
                    })}>Pelo menos uma letra minúscula</span>
                    
                </div>
                <div className={styles.validationCase}>
                <img src={Check} alt="OK" className={classNames({
                        [styles.okHidden]: true,
                        [styles.ok]: upperCase
                    })}/>
                    <span className={classNames({
                        [styles.spanOk]: upperCase
                    })}>Pelo menos uma letra maiúscula</span>
                    
                </div>
                <div className={styles.validationCase}>
                <img src={Check} alt="OK" className={classNames({
                        [styles.okHidden]: true,
                        [styles.ok]: passNumber
                    })}/>
                    <span className={classNames({
                        [styles.spanOk]: passNumber
                    })}>Pelo menos um número</span>
                    
                </div>
            </div>
            <div className={styles.error} id="error">
                <span>Ops, usuário ou senha inválidos.</span>
                <span>Tente novamente!</span>
            </div>
            <button className={styles.button} onClick={(event)=> {
                event.preventDefault();
                if(emailValid && passValid){
                    register();
                }
            }}>
                Continuar
            </button>
            <div className={styles.loginCall}>
                <p>Já possui uma conta? Efetue o <Link to={'/'} className={styles.link}>Login</Link></p>
            </div>
        </form>
    );
}