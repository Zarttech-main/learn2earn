import Base from "../components/Base";
import styles from "../styles/Marketplace.module.css";

import Head from 'next/head';
import { products } from '../utils/constants';

const Marketplace = () => {
    return (
        <>
            <Head>
                <title>Marketplace - Learn2Earn</title>
            </Head>
            <div>
                <Base>
                    <div className={styles.title}><h4>Marketplace</h4></div>
                    <div className={styles.form}>
                        <input type='' name='search' placeholder='search'></input>
                        <select>
                            <option>Select by Categories</option>
                        </select>
                    </div>
                    <div className={styles.products}>
                        {
                            products.map(product => 
                                <div className={styles.content}>
                                    <p><span>{ product.name }</span></p>
                                    <p><label>{product.price}ETH</label></p>
                                    <img className={styles.product} loading="lazy" alt={product.name} src={product.url} />
                                </div>
                            )
                        }
                    </div>
                </Base>
            </div>
        </>
    )
}

export default Marketplace;