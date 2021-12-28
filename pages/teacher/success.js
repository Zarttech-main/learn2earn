import routes from '../../utils/routes';
import Base from "../../components/BaseTeacher";
import styles from "../../styles/SuccessAllocate.module.css";
import { useRouter } from 'next/router';
import Head from 'next/head';

const SuccessAllocate = () => {
    const router = useRouter()

    return (
            <div>
                <Head>
                    <title>Successfully Added - Learn2Earn</title>
                </Head>
            <Base>
                <div className={styles.title}>
                    <h4 className={styles.title}>Successfully Added</h4>
                </div>
                <div className={styles.image}></div>
                <div className={styles.button}>
                    <a href={routes.TeacherDashboard}>Go To Dashboard</a>
                </div>
            </Base>
        </div>
    )
}

export default SuccessAllocate;