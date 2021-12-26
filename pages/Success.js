import Base from "../components/Base"
import Button from "../components/Button";
import styles from "../styles/Success.module.css"

const Success = () => {
    const handleCollectReward = () => {

    }

    return (
        <Base>
            <div className={styles.container}>
                <h2 className={styles.title}>Successfully Completed</h2>
                <h4>Congratulations, You’ve answered 79 of 100 Questions correctly</h4>
                <h2 className={styles.title}>You earned 158 Tokens</h2>
                <h4>Claim your reward now</h4>
                <div className={styles.img}></div>
                <Button title="Collect Reward" onClick={handleCollectReward} />
            </div>
        </Base>
    )
}

export default Success;