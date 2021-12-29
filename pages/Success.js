import Head from "next/head";
import { useState } from "react";
import Base from "../components/Base"
import Button from "../components/Button";
import contractApi from "../pages/api/ether";
import styles from "../styles/Success.module.css"

const Success = () => {
    const [trx, setTrx] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCollectReward = async () => {
        setLoading(true)
        const trxOrError = await contractApi.claimReward({ amount : 10 });
        if(trxOrError.message) {
            alert(`${trxOrError.message}, please try again in a bit`);
            return setLoading(false);
        };
        
        setTrx(trx);
    }

    return (
        <>
            <Head>
                <title>Successfully Submitted - Learn2Earn</title>
            </Head>
            <Base>
                <div className={styles.container}>
                    {
                        !trx ?
                            <>
                                <h2 className={styles.title}>Successfully Completed</h2>
                                <h4>Congratulations, You’ve answered 79% of 100% Questions correctly</h4>
                                <h2 className={styles.title}>You earned 10 Tokens</h2>
                                <h4>Claim your reward now</h4>
                                <div className={styles.img}></div>
                            </>
                            :
                            <a style={{ margin: 100, color: "blue" }} href={`https://rinkeby.etherscan.io/tx/${trx}`}>Reward Claimed, Click here to view in the transaction in the exploere</a>
                    }
                    <Button title={loading ? "Collecting..." : "Collect Reward"} onClick={handleCollectReward} />
                </div>
            </Base>
        </>
    )
}

export default Success;