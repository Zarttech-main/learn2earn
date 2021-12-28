import Base from "../../components/Base";
import styles from "../../styles/WithdrawToken.module.css";

import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../../utils/routes";
import helpers from "../../utils/helpers";
import { useEffect, useState } from "react";
import { earnings } from "../../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import contractApi from "../api/ether";

const WithdrawToken = () => {
    const router = useRouter();
    const [balance, setbalance] = useState(0)
    const [etherAmount, setEtherAmount] = useState(0)
    const [walletAddress, setWalletAddress] = useState();

    useEffect(() => {
      getWalletAddress();
      setbalance(helpers.sumObjectValue(earnings, "amount"));
    }, []);

    const getWalletAddress = () => {
        const wallet = localStorage.getItem("wallet");
        setWalletAddress(wallet);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!etherAmount) return alert("Enter amount")
        if(balance < helpers.etherToAceIt(etherAmount)){
            alert("Insuffient Funds")
            return
        }

        const trx = await contractApi.redeemTokens({ amount : etherAmount });
        if(!trx) return alert("Tracsaction failed");
        localStorage.setItem("redeemTrx", trx);
        
        router.push(routes.WidthrawSuccess);
    }

    const disabled = !walletAddress ? { disabled: "disabled" } : ""

    const handleChange = (e) => {
        const amount = e.target.value;
        setEtherAmount(helpers.aceItToEther(amount))
    }

    return (
        <div>
            <Head>
                <title>Widthraw Tokens</title>
            </Head>
            <Base>
                {
                    !walletAddress 
                        ? <Link href={routes.Wallet}><span className={styles.title}>No wallet found, click here to add a wallet</span></Link>
                        :
                        <span className={styles.title}>Widthrawing to: <span>{ walletAddress }</span></span>
                }
                <div className={styles.form}>
                    <form onSubmit={handleSubmit} method='post'>
                        <label>Amount of AceIt</label>
                        <label className={styles.label2}>Metis</label>
                        <div>
                            <input type='text' name='' placeholder='0.00' onChange={handleChange}></input>
                            <FontAwesomeIcon icon={faExchangeAlt} height={20}></FontAwesomeIcon>
                            <input value={etherAmount} type='text' name='' placeholder='0.00' onChange={handleChange}></input>
                        </div>
                        <span>Total balance - {balance}</span>
                        <div>
                            <input {...disabled} type='submit' className={`${styles.submit} ${styles.disabled}`} name='submit' value='Confirm Token Withdrawal'></input>
                        </div>
                    </form>
                </div>
            </Base>
        </div>
    )
}

export default WithdrawToken;