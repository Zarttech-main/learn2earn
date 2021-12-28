import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Base from "../../components/BaseTeacher";
import Button from "../../components/Button";
import styles from "../../styles/Tests.module.css"
import { assignments } from "../../utils/constants";
import routes from "../../utils/routes";


const Tests = () => {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Dashboard - Learn2Earn</title>
            </Head>
            <Base>
                <div>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Dashboard</h2>
                        <div className={styles.card}>
                            <h3 className={styles.balance}>0.0057 AceIt</h3>
                            <h4 className={styles.balanceLabel}>Available wallet balance</h4>

                            <Button style={styles.button} title="Buy AceIt" onClick={() => router.push(routes.Buy)} />
                        </div>

                        <h4>Recently added tests</h4>
                    </div>
                    <div>
                    {
                            assignments.slice(0,3).map(assignment =>
                                <div className={styles.smallcard}>
                                    <h5>{ assignment.name }  -  { assignment.questions.length } Questions</h5>
                                    <p>Reward: { assignment.reward } Tokens</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Base>
        </>
    )
}


export default Tests;