import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"

import contractApi from "../api/ether"
import Button from "../../components/Button"
import Base from "../../components/BaseTeacher"
import styles from "../../styles/Buy.module.css"
import helpers from "../../utils/helpers"

const Buy = () => {
    const [error, setError] = useState();
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [ethereum, setEthereum] = useState(null);
    const [transactonHash, setTransactionHash] = useState();

    const handleBuy = async () => {
        if(!amount) return setError(true);
        setError(null);

        setLoading(true)
        const account = await contractApi.getAccount();
        if(!account) return setLoading(false);

        const etherAmount = helpers.aceItToEther(amount);
        const hash = await contractApi.purchaseTokens({ account, amount: etherAmount });
        setTransactionHash(hash);

        setLoading(false);
    }

    useEffect(() => {
        const { ethereum } = window;
        setEthereum(ethereum);
    }, [])

    return (
        <>
            <Head>
                <title>Buy Tokens</title>
            </Head>
            <Base>
                <div className={styles.container}>
                {
                    transactonHash && <label className={styles.success}>
                        <a target="_blank" href={`https://rinkeby.etherscan.io/tx/${transactonHash}`}>
                            Successfully Purchased {amount} AceIt, click here to view in Explorer
                        </a>
                    </label>
                }
                
                <h1 className={styles.title}>Buy AceIt</h1>
                
                <div className={styles.fields}>
                    <div>
                        <label className={styles.label}>Amount *</label>
                            <input required placeholder="Enter amount" className={styles.input} type="number" name="wallet" onChange={(e) => setAmount(e.target.value)} />
                            { error && <div className={styles.error}>Please enter amount</div>}
                    </div>
                    
                    <div>
                            {
                                !ethereum && <label className={styles.info}>
                                    <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
                                        You need to install metamask extension for this page to work properly, click here to install metamask
                                    </a>
                                </label>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.submitContainer}>
                    <Button style={styles.button} title={loading ? "Processing Transaction..." : "Buy Token"} onClick={handleBuy} />
                </div>
            </Base>
        </>
    )
}

export default Buy