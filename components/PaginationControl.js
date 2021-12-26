import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from '../styles/Detail.module.css'

export default function PaginationControl({ onNext, onPrev }) {
    return (
        <div className={styles.paging}>
            <div onClick={onPrev}>
                <FontAwesomeIcon icon={faChevronLeft} height={20} />
                <span>Prev</span>
            </div>
            <div onClick={onNext}>
                <span>Next</span>
                <FontAwesomeIcon icon={faChevronRight} height={20} />
            </div>
        </div>
    )
}
