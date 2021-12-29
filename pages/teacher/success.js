import { useEffect, useState } from 'react';
import Head from 'next/head';

import routes from '../../utils/routes';
import { useRouter } from 'next/router';
import Base from "../../components/BaseTeacher";
import styles from "../../styles/SuccessAllocate.module.css";

const SuccessAllocate = () => {
    const router = useRouter();
    const [trx, setTrx] = useState();

    useEffect(() => {
        const trx = localStorage.getItem("testTrx");
        setTrx(trx);
    })

    return (
            <div>
                <Head>
                    <title>Successfully Added - Learn2Earn</title>
                </Head>
            <Base>
                <div className={styles.title}>
                    <h4 className={styles.title}>Successfully Added</h4>
                    <span className={styles.success}><a target="_blank" href={`https://rinkeby.etherscan.io/tx/${trx}`}>Click here to view the transaction on the explorer</a></span>
                </div>
                <div className={styles.image}></div>
                <div className={styles.button}>
                    <a href={routes.TeacherDashboard}>Go To Dashboard</a>
                </div>
            </Base>
        </div>
    )
}

export default SuccessAllocate;