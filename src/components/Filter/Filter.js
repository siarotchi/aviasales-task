import React from 'react'
import s from './Filter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../redux/action.js'

const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filter)
    const { all, zero, one, two, three } = filter
    const filterOptions = [
        { label: 'All', id: 1, checked: all, name: 'all' },
        { label: 'No stops', id: 2, checked: zero, name: 'zero' },
        { label: '1 stop', id: 3, checked: one, name: 'one' },
        { label: '2 stops', id: 4, checked: two, name: 'two' },
        { label: '3 stops', id: 5, checked: three, name: 'three' },
    ]

    function handleChange(e) {
        dispatch(setFilter(e.target.name))
    }

    return (
        <div className={s.filter}>
            <p className={s.filterTitle}>Stops on the way</p>
            {filterOptions.map((filter) => (
                <div key={filter.id} className={s.filterItem}>
                    <input
                        type="checkbox"
                        className={s.checkbox}
                        id={filter.id}
                        name={filter.name}
                        checked={filter.checked}
                        onChange={handleChange}
                    />
                    <label htmlFor={filter.id}>{filter.label}</label>
                </div>
            ))}
        </div>
    )
}
export default Filter
