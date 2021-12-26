import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import routes from "../../utils/routes";
import Base from "../../components/Base"
import Button from "../../components/Button";
import styles from "../../styles/Detail.module.css"
import { assignments } from "../../utils/constants"
import usePagination from "../../hooks/usePagination";
import PaginationCounter from "../../components/PaginationCounter";
import { timeout } from "../api/auth";

const TestDetail = () => {
    const router = useRouter()
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const assignment = assignments.filter(item => item.id == router.query.id)[0];
    const { slice, range } = usePagination(assignment?.questions || [], page, 1);

    const handleSubmit = async () => {
        setLoading(true)
        await timeout(3000);
        setLoading(false);
        setSuccess(true)
        await timeout(1000)
        router.replace(routes.Success);
    }

    return (
        <>
            <Head>
                <title>{assignment?.name} Test - Learn2Earn</title>
            </Head>
            <Base>
                <h1 className={styles.title}>{assignment?.name} Test</h1>
                <PaginationCounter range={range} slice={slice} setPage={setPage} page={page} />
                    {slice?.map(question => 
                    <div className={styles.assignment}>
                        <h2 className={styles.question_title}>Q{question.id}</h2>
                        <div className={styles.question}>{question.question}</div>
                        {
                            question.img && <Image className={styles.img} src={question.img} width={500} height={200} />
                        }
                        <ul>
                            {
                                question?.options?.map((option) => 
                                <li className={styles.option}>
                                    <label for={option.text}>
                                        <input type="radio" name={question.question} id={option.text} /> {option.text}
                                    </label>
                                </li>
                                )
                            }
                        </ul>
                    </div>
                    )}
                    <PaginationCounter range={range} slice={slice} setPage={setPage} page={page} />
                    <div className={styles.submitContainer}>{ 
                        page === assignment?.questions.length && <Button disabled={loading || success} style={styles.submitButton} title={loading ? "Submitting..." : success ? "Redirecting..." : "Submit"} onClick={handleSubmit} />
                    }</div>
            </Base>
        </>
    );
}
 
export default TestDetail;