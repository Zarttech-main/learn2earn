import routes from '../../utils/routes';
import Base from "../../components/BaseTeacher";
import styles from "../../styles/Allocate.module.css";
import { timeout } from '../api/auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Allocate = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        await timeout(300);
        router.replace(routes.TeacherSuccess);
    }

    return <div>
        <Head>
            <title>Allocate number of Students - Learn2Earn</title>
        </Head>
        <Base>
        <div className={styles.title}>
            <table>
                <tr>
                    <td><h4>Set Question</h4></td>
                    <td><label>3/3</label></td>
                </tr>
            </table>
        </div>
        <div className={styles.form}>
            <form onSubmit={handleSubmit} method='post'>
                <label>Allocate Number of Students</label>
                <div>
                    <input type='text' name='' placeholder='E.g 50'></input>
                </div>
                <div>
                    <input type='submit' className={styles.submit} name='submit' value={loading ? "Submitting" : 'Submit'}></input>
                </div>
            </form>
        </div>
    </Base></div>
}

export default Allocate;