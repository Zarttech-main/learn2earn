import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/Base.module.css'
import routes from '../utils/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const TeacherDashboard = ({ children }) => {
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
                    <Link href={routes.TeacherDashboard}>
                        <li className={styles.tab}>
                            <FontAwesomeIcon icon={faUser} height={20}></FontAwesomeIcon>
                            <a href=''><label>The Dashboard</label></a>
                        </li>
                    </Link>
                    <Link href={routes.AddTest}>
                        <li className={styles.tab}>
                            <FontAwesomeIcon icon={faBook} height={20}></FontAwesomeIcon>
                            <a href=''><label>Add Test</label></a>
                        </li>
                    </Link>
                    <Link href={routes.Login}>
                        <li className={styles.tab}>
                            <FontAwesomeIcon icon={faSignOutAlt} height={20}></FontAwesomeIcon>
                            <a href=''><label>Logout</label></a>
                        </li>
                    </Link>
                </div>
                <div className={styles.card}>
                    {children}
                </div>
            </main>
        </div>
    )
}


export default TeacherDashboard;