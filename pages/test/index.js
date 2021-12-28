import Head from "next/head";
import Link from "next/link";
import Base from "../../components/Base";
import styles from "../../styles/Index.module.css";
import { assignments } from "../../utils/constants";
import routes from "../../utils/routes";

const Index = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Learn2Earn</title>
            </Head>
            <div>
                <Base>
                    <div className={styles.title}><h4>Take a test to earn reward</h4></div>
                    <div className={styles.form}>
                        <select>
                            <option>Select by Reward</option>
                        </select>
                        <select>
                            <option>Select by Categories</option>
                        </select>
                    </div>
                    {
                        assignments.map(assignment =>
                            <Link href={`${routes.Dashboard}/${assignment.id}`}>
                                <div className={styles.smallcard}>
                                    <h5>{ assignment.name }  -  { assignment.questions.length } Questions</h5>
                                    <p>Reward: { assignment.reward } Tokens</p>
                                </div>
                            </Link>
                        )
                    }
                </Base>
            </div>
        </>)
}

export default Index;