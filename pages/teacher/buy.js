import Head from "next/head"
import { useState } from "react"

import Base from "../../components/BaseTeacher"
import Button from "../../components/Button"
import styles from "../../styles/Buy.module.css"

const Buy = () => {
    const [error, setError] = useState()
    const [data, setdDta] = useState({
        amount: 0,
        wallet: null
    });

    const handleBuy = () => {
        if(!data.wallet && !data.amount) return setError(true);
        setError(null)
        console.log('====================================');
        console.log('buying...');
        console.log(data);
        console.log('====================================');
    }

    return (
        <>
            <Head>
                <title>Manage Tests</title>
            </Head>
            <Base>
                <div className={styles.container}>
                    <h1 className={styles.title}>Buy ETH</h1>

                    <div className={styles.fields}>
                        <div>
                            <label className={styles.label}>Amount *</label>
                            <input required placeholder="Enter amount" className={styles.input} type="number" name="wallet" onChange={(e) => setdDta({ ...data, wallet: e.target.value})} />
                        </div>

                        <div>
                            <label className={styles.label}>Wallet Address *</label>
                            <input required placeholder="Enter Wallet Address" className={styles.input} type="text" name="wallet" onChange={(e) => setdDta({ ...data, wallet: e.target.value})} />
                        </div>
                    </div>
                </div>
                <div className={styles.submitContainer}>
                    { error && <div className={styles.error}>Both fields are required</div>}
                    <Button style={styles.button} title="Buy" onClick={handleBuy} />
                </div>
            </Base>
        </>
    )
}

export default Buy