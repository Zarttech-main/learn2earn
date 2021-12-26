import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Button from '../components/Button';
import styles from '../styles/Login.module.css'
import routes from '../utils/routes';
import authApi from './api/auth';
import Image from 'next/image';

const Login = () => {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [loginData, setLoginData] = useState({})
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        const user = await authApi.login(loginData);

        if(!user) {
            setLoading(false);
            return setError(true)
        }

        if(user.isTeacher) return router.replace(routes.TeacherDashboard);

        router.replace(routes.Dashboard);
    }

    const disabled = loading ? "disabled" : "";

    return (
        <>
            <Head>
                <title>Login - Learn2Earn</title>
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.logo}></div>
                    <div className={styles.title}>Sign In</div>
                    <div className={styles.card}>
                        {error && !loading && <div className={styles.error}>Invalid username or password. please note: both username and password are case sensitive</div>}
                        <form method='post' onSubmit={handleLogin}>
                        <label className={styles.label}>Username</label>
                        <input {...disabled} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}  type='text' className={`${loading && styles.disabled} ${styles.input}`} name='username' placeholder='Enter Username'></input>
                        <label className={styles.label}>Password</label>
                        <input {...disabled} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} type='password' className={`${loading && styles.disabled} ${styles.input}`} name='password' placeholder='Enter Password'></input>
                        {
                            loading ?
                                <div className={styles.loader}>
                                    <Image src={require('../public/loader.gif')} height={160} width={160} />
                                </div>
                            :
                                <input type='submit' className={styles.submit} name='submit' value='SIGN IN'></input>
                        }
                        </form>
                        <p className={styles.register}>Don't have an account? <a href={Link}>Register</a></p>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <div className={styles.illustration1}></div>
                    <div className={styles.illustration2}></div>
                </footer>
            </div>
        </>
    )
}


export default Login;