import React from 'react'
import s from './Tabs.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../../redux/action'

const Tabs = () => {
    const sort = useSelector((state) => state.sort)
    const dispatch = useDispatch()

    function handleChange(e) {
        dispatch(setSort(e.target.value))
    }

    return (
        <div className={s.blockTabs}>
            <input type="radio" value="cheep" checked={sort === 'cheep'} onChange={handleChange} id="cheep" />
            <label htmlFor="cheep">THE CHEAPEST</label>
            <input type="radio" value="fast" checked={sort === 'fast'} onChange={handleChange} id="fast" />
            <label htmlFor="fast">THE FASTEST</label>
        </div>
    )
}
export default Tabs
