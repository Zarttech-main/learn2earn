import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Base from "../../components/Base"
import Button from "../../components/Button";
import PaginationControl from "../../components/PaginationControl";
import PaginationCounter from "../../components/PaginationCounter";
import usePagination from "../../hooks/usePagination";
import styles from "../../styles/Detail.module.css"
import { assignments } from "../../utils/constants"
import routes from "../../utils/routes";

const TestDetail = () => {
    const router = useRouter()
    const [page, setPage] = useState(1);
    const assignment = assignments.filter(item => item.id == router.query.id)[0];
    const { slice, range } = usePagination(assignment?.questions || [], page, 3);

    return (
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

            <Button className={styles.submitButton} title="Submit" onClick={() => router.push(routes.Success)} />
       </Base>
    );
}
 
export default TestDetail;