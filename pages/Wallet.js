import Styles from "../styles/Wallet.module.css";
import FormControls from "../styles/FormControls.module.css";
import {useState} from "react";
import Base from "../components/Base"
import routes from "../utils/routes";

const Wallet = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (walletAddress) {
            console.log(walletAddress);
            // save value in the localstorage
            localStorage.setItem('wallet', walletAddress);
            setWalletAddress(walletAddress);
            alert("Successfully saved")
        }
    }
    return (
        <>
        <Base>
            <div className={Styles.pageWrapper}>
                <h1 className={Styles.pageTitle}>My Wallet</h1>
                <div className={Styles.formWrapper}>
                    <h2>My Ethereum wallet address</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={FormControls.formGroup}>
                            <input type="text" className={FormControls.formControl} id="walletAddress" name="walletAddress" value={walletAddress}
                                onChange={(e) => setWalletAddress(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit" className={Styles.confirmBtn}>Confirm</button>
                            <a href={routes.Earnings} className={Styles.earningsBtn}>Earnings</a>
                        </div>
                    </form>
                </div>
            </div>
        </Base>
        </>
    )
}

export default Wallet;