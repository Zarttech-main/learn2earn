import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/Login.module.css'
import routes from '../utils/routes';

const Login = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.logo}></div>
                <div className={styles.title}>Sign In</div>
                <div className={styles.card}>
                    <form action='./test/' method='post'>
                        <label className={styles.label}>Username</label>
                        <input type='text' className={styles.input} name='username' placeholder='Enter Username'></input>
                        <label className={styles.label}>Password</label>
                        <input type='password' className={styles.input} name='password' placeholder='Enter Password'></input>
                        <input type='submit' className={styles.submit} name='submit' value='SIGN IN'></input>
                    </form>
                    <p className={styles.register}>Don't have an account? <a href={Link}>Register</a></p>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.illustration1}></div>
                <div className={styles.illustration2}></div>
            </footer>
        </div>
    )
}


export default Login;