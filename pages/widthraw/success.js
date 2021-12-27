import Head from 'next/head';
import Base from "../../components/Base";
import styles from "../../styles/SuccessWithdraw.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import routes from '../../utils/routes';

const Success = () => {
    return (
        <div>
            <Head>
                <title>Successfully Widthrawn</title>
            </Head>
            <Base>
                <div className={styles.title}>
                    <h4 className={styles.title}>Successfully Widthrawn</h4>
                </div>
                <div className={styles.image}><FontAwesomeIcon icon={faCheckCircle} height={300}></FontAwesomeIcon></div>
                <div className={styles.button}>
                    <a href={routes.Dashboard}>Go To Dashboard</a>
                </div>
            </Base>
        </div>
    )
}

export default Success;