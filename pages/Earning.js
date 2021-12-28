import Head from "next/head";
import Base from "../components/Base"
import { earnings } from "../utils/constants";
import styles from "../styles/Earning.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import helpers from "../utils/helpers";
import { useEffect, useState } from "react";
import routes from "../utils/routes";
import { useRouter } from "next/router";

const Earnings = () => {
    const [totalBalance, setTotalBalance] = useState(0);
    const router = useRouter();
    const [viewAll, setViewAll] = useState(false)

    useEffect(() => {
        const total = helpers.sumObjectValue(earnings, "amount");
        setTotalBalance(total);
    })

    return (
        <>
            <Head>
                <title>My Earnings - Learn2Earn</title>
            </Head>
            <div>
                <Base>
                    <div className={styles.title}><h4>My Earnings</h4></div>
                    <header className={styles.header}>
                        <div className={styles.headerTop}>
                            <div>
                                <span className={styles.balance}>{totalBalance} AceIt</span>
                            </div>
                            <div className={styles.arrowsContainer}>
                                <FontAwesomeIcon icon={faArrowLeft} height={30} />
                                <FontAwesomeIcon icon={faArrowRight} height={30} />
                            </div>
                            <div>
                                <span className={styles.balanceEqv}>{helpers.aceItToEther(totalBalance)} Eth</span>
                            </div>
                        </div>
                        <button onClick={() => router.push(routes.Widthraw)} className={styles.button}>Widthraw</button>
                    </header>
                    <div className={styles.content}>
                        {
                            (viewAll ? earnings : earnings.slice(0, 2)).map((earning, index) => 
                                <>
                                    <div className={styles.earnContainer} key={index}>
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
                        <p onClick={() => setViewAll(true)}>View All</p>
                    </div>
                </Base>
            </div>
        </>
    )
}

export default Earnings;