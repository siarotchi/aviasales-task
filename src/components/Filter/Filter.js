import React from 'react'
import styles from './Filter.module.css'

const Filter = () => {
    return (
        <div className={`${styles.wrapper} ml-auto`}>
            <h2 className={styles.quantityTitle}>Количество пересадок</h2>
            <ul className={styles.filter}>
                <li className={styles.filterItem}>
                    <input type="checkbox" id="1" />
                    <label htmlFor="1">Все</label>
                </li>
                <li className={styles.filterItem}>
                    <input type="checkbox" id="2" />
                    <label htmlFor="2">Без пересадок</label>
                </li>
                <li className={styles.filterItem}>
                    <input type="checkbox" id="3" />
                    <label htmlFor="3">1 пересадка</label>
                </li>
                <li className={styles.filterItem}>
                    <input type="checkbox" id="4" />
                    <label htmlFor="4">2 пересадки</label>
                </li>
                <li className={styles.filterItem}>
                    <input type="checkbox" id="5" />
                    <label htmlFor="5">3 пересадки</label>
                </li>
            </ul>
        </div>
    )
}

export default Filter
