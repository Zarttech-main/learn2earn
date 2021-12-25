import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/Base.module.css'
import routes from '../utils/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Dashboard = ({children}) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.header}>
                    <li className={styles.small}>
                        <div className={styles.logo}></div>
                    </li>
                    <li className={styles.long}>
                        <div className={styles.topmenu}> 
                            <div className={styles.userName}>
                                <span>Welcome Muideen</span>
                                <FontAwesomeIcon icon={faUser} height={20}></FontAwesomeIcon>
                            </div>
                        </div>
                    </li>
                    
                </div>
                <div className={styles.leftbar}> 
                    <li className={styles.tab}>
                        <FontAwesomeIcon icon={faUser} height={20}></FontAwesomeIcon>
                        <a href=''><label>Dashboard</label></a>
                    </li>
                    <li className={styles.tab}>
                        <FontAwesomeIcon icon={faMoneyBillWaveAlt} height={20}></FontAwesomeIcon>
                        <a href=''><label>Earnings</label></a>
                    </li>
                    <li className={styles.tab}>
                        <FontAwesomeIcon icon={faWallet} height={20}></FontAwesomeIcon>
                        <a href=''><label>Wallet</label></a>
                    </li>
                    <li className={styles.tab}>
                        <FontAwesomeIcon icon={faShoppingCart} height={20}></FontAwesomeIcon>
                        <a href=''><label>Marketplace</label></a>
                    </li>
                    <li className={styles.tab}>
                        <FontAwesomeIcon icon={faSignOutAlt} height={20}></FontAwesomeIcon>
                        <a href=''><label>Logout</label></a>
                    </li>
                </div>
                <div className={styles.card}> 
                    {children}
                </div>
            </main>
        </div>
    )
}


export default Dashboard;