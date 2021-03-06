import Head from "next/head";
import {useRouter} from "next/router";
import Base from "../../components/BaseTeacher";

import routes from "../../utils/routes";
import styles from "../../styles/AddTest.module.css";
import commonStyles from "../../styles/Common.module.css";
import formStyles from "../../styles/FormControls.module.css";
import {useState, useEffect} from "react";
import contractApi from "../api/ether"
import helpers from "../../utils/helpers"

const SetQuestionPageOne = () => {
    const router = useRouter();
    const [amount, setAmount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem('testData', JSON.stringify({
            testid: new Date().getTime().toString(),
            testreward: helpers.aceItToEther(amount),
        }));

        router.push(routes.Allocate);
    }

    return (
        <>
            <Head>
                <title>Add Test</title>
            </Head>
            <Base>
                <div className={styles.pageWrapper}>
                    <div className={styles.flexAlignCenterJustifyBetween}>
                        <h1 className={styles.pageTitle}>Set Question</h1>
                    </div>
                    <div className={styles.formWrapper}>
                        <form onSubmit={handleSubmit}>
                            <div className={formStyles.formGroup}>
                                <label htmlFor="testName" className={formStyles.label}>Enter Name of the Test</label>
                                <input placeholder="Test Name" type="text" className={formStyles.formControl} id="testName" />
                            </div>
                            <div className={formStyles.formGroup}>
                                <label htmlFor="tokenAmount" className={formStyles.label}>Enter Amout of token to be allocated</label>
                                <input  onChange={(e) => setAmount(e.target.value)}  placeholder="Reward Amount (Token)" type="number" className={formStyles.formControl} id="tokenAmount" />
                            </div>

                            <ul className={styles.questionListing}>
                                <li>

                                    {/* question 1 */}
                                    <div className={styles.questionItem}>
                                        <div className={styles.card}>
                                            <div className={styles.cardBody}>
                                                <div className={styles.selectDropWrapper}>
                                                    <select name="question-option" id="question-option" className={formStyles.formControl}>
                                                        <option value="" defaultValue>Select Question option</option>
                                                        <option value="question-option-1">Question option one</option>
                                                        <option value="question-option-2">Question option two</option>
                                                        <option value="question-option-3">Question option three</option>
                                                        <option value="question-option-4">Question option four</option>
                                                    </select>
                                                </div>
                                                <div className={styles.sectionTitle}>Q1</div>

                                                <div className={formStyles.formGroup}>
                                                    <input type="text" className={formStyles.formControl} placeholder="Enter question " />
                                                </div>

                                                <div className={styles.selectDropWrapper}>
                                                    <select name="answer-option" id="answer-option" className={formStyles.formControl}>
                                                        <option value="" defaultValue>Select an Answer option</option>
                                                        <option value="answer-option-1">Answer option one</option>
                                                        <option value="answer-option-2">Answer option two</option>
                                                        <option value="answer-option-3">Answer option three</option>
                                                        <option value="answer-option-4">Answer option four</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <div className={styles.sectionTitle}>Multiple answers option</div>
                                                    <ul className={formStyles.controlList}>
                                                        <li>
                                                            <div className={formStyles.formGroup}>
                                                                <input type="text" className={formStyles.formControl} placeholder="Enter answer" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={formStyles.formGroup}>
                                                                <input type="text" className={formStyles.formControl} placeholder="Enter answer" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={formStyles.formGroup}>
                                                                <input type="text" className={formStyles.formControl} placeholder="Enter answer" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className={styles.formActionTab}>
                                                        <div>
                                                            <button className={commonStyles.deleteBTn}>
                                                                {/* <i className="fas fa-trash"></i> */}
                                                                delete
                                                            </button>
                                                            <button className={commonStyles.editBTn}>
                                                                {/* <i className="fas fa-pen"></i> */}
                                                                edit
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <span className={styles.addNewBtn}>Add Answer +</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>

                                    {/* question 2 */}

                                    <div className={styles.questionItem}>
                                        <div className={styles.card}>
                                            <div className={styles.cardBody}>
                                                <div className={styles.selectDropWrapper}>
                                                    <select name="question-option" id="question-option" className={formStyles.formControl}>
                                                        <option value="" defaultValue>Select Question option</option>
                                                        <option value="question-option-1">Question option one</option>
                                                        <option value="question-option-2">Question option two</option>
                                                        <option value="question-option-3">Question option three</option>
                                                        <option value="question-option-4">Question option four</option>
                                                    </select>
                                                </div>
                                                <div className={styles.sectionTitle}>Q1</div>

                                                <div className={formStyles.formGroup}>
                                                    <input type="text" className={formStyles.formControl} placeholder="Enter question " />
                                                </div>

                                                <div className={styles.selectDropWrapper}>
                                                    <select name="answer-option" id="answer-option" className={formStyles.formControl}>
                                                        <option value="" defaultValue>Select an Answer option</option>
                                                        <option value="answer-option-1">Answer option one</option>
                                                        <option value="answer-option-2">Answer option two</option>
                                                        <option value="answer-option-3">Answer option three</option>
                                                        <option value="answer-option-4">Answer option four</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <div className={styles.sectionTitle}>Multiple answers option</div>
                                                    <ul className={formStyles.controlList}>
                                                        <li className={styles.imgType}>
                                                            {/* <img src={require('../../public/tests/1.png')} /> */}
                                                            <div className={formStyles.formGroup}>
                                                                <input type="text" className={formStyles.formControl} placeholder="Enter answer" />
                                                            </div>
                                                        </li>
                                                        <li className={styles.imgType}>
                                                            {/* <img src={require('../../public/tests/1.png')} /> */}
                                                            <div className={formStyles.formGroup}>
                                                                <input type="text" className={formStyles.formControl} placeholder="Enter answer" />
                                                            </div>
                                                        </li>
                                                        <li className={styles.imgType}>
                                                            {/* <img src={require('../../public/tests/1.png')} /> */}
                                                            <div className={formStyles.formGroup}>
                                                                <input type="text" className={formStyles.formControl} placeholder="Enter answer" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className={styles.formActionTab}>
                                                        <div>
                                                            <button className={commonStyles.deleteBTn}>
                                                                {/* <i className="fas fa-trash"></i> */}
                                                                delete
                                                            </button>
                                                            <button className={commonStyles.editBTn}>
                                                                {/* <i className="fas fa-pen"></i> */}
                                                                edit
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <span className={styles.addNewBtn}>Add Answer +</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></li>
                            </ul>

                            <div className="mb-4">
                                <button className={styles.addNewBtnLg}>Add Question +</button>
                            </div>

                            <button type="submit" className={styles.btnPrimaryBlue}>Continue</button>
                        </form>
                    </div>
                </div>

            </Base>
        </>
    )
}


export default SetQuestionPageOne;