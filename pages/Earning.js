import Base from "../components/Base"
import styles from "../styles/Earning.module.css";
import { earnings } from "../utils/constants";
import routes from "../utils/routes";

const Earnings = () => {
    return (
        <div>
            <Base>
                <div className={styles.title}><h4>My Earnings</h4></div>
                <div className={styles.content}>
                    {
                        earnings.map(earning => 
                            <>
                                <div className={styles.earnContainer}>
                                    <p>{earning.amount}ETH</p>
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
    )
}

export default Earnings;