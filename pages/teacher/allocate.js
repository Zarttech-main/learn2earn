import Head from 'next/head';
import { useState } from 'react';
import contractApi from "../api/ether"
import { useRouter } from 'next/router';
import routes from '../../utils/routes';
import Base from "../../components/BaseTeacher";
import styles from "../../styles/Allocate.module.css";

const Allocate = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [studentsSize, setStudentsSize] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = JSON.parse(localStorage.getItem('testData'));
        const trx = await contractApi.setTest({...data, studentsSize});
        if(!trx) return setLoading(false);
        
        console.log("recorded", trx);
        localStorage.setItem("testTrx", trx);
        router.replace(routes.TeacherSuccess);
    }

    return <div>
        <Head>
            <title>Allocate number of Students - Learn2Earn</title>
        </Head>
        <Base>
            <div className={styles.title}>
                <table>
                    <tbody>
                        <tr>
                            <td><h4>Set Question</h4></td>
                            <td><label>3/3</label></td>
                        </tr></tbody>
                </table>
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <label>Allocate Number of Students</label>
                    <div>
                        <input onChange={(e) => setStudentsSize(e.target.value)} type='text' name='' placeholder='E.g 50'></input>
                    </div>
                    <div>
                        <input type='submit' className={styles.submit} name='submit' value={loading ? "Processing..." : 'Add Test'} />
                    </div>
                </form>
            </div>
        </Base></div>
}

export default Allocate;