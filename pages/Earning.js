import Head from "next/head";
import Base from "../components/Base"
import { earnings } from "../utils/constants";
import styles from "../styles/Earning.module.css";

const Earnings = () => {
    return (
        <>
            <Head>
                <title>My Earnings - Learn2Earn</title>
            </Head>
            <div>
                <Base>
                    <div className={styles.title}>
                        <h4>My Earnings</h4>
                        <h3>Total Earnings: 300 AceIt</h3>
                    </div>
                    <div className={styles.content}>
                        {
                            earnings.map(earning => 
                                <>
                                    <div className={styles.earnContainer}>
                                        <p>{earning.amount} AceIt</p>
                                        <div className={styles.earnInfo}>
                                            <span>{ earning.totalConfirmations } / 3 Confirmations</span>
                                            <span>{earning.timestamp}</span>
                                        </div>
                                    </div>
                                    <hr className={styles.hr}></hr>
                                </>
                            )
                        }
                    </div>
                </Base>
            </div>
        </>
    )
}

export default Earnings;